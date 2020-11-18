import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { debounceTime, map, tap } from 'rxjs/operators'
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public search$ = new BehaviorSubject('');

  public contacts = combineLatest([this.contactService.all(), this.search$])
    .pipe(
      debounceTime(200),
      map(([cs, search]) => cs.filter(c => c.name.startsWith(search))),
      map(cs => [...cs].sort((a, b) => a.name.localeCompare(b.name)))
    );

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {
  }

  public updateSearch(str) {
    this.search$.next(str);
  }

  public async openModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsComponent,
      componentProps: {
        contact
      }
    });
    modal.present();
  }

  public doRefresh(event) {
    this.contactService.add();
    event.target.complete();
  }

}
