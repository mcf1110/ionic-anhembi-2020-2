import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { debounceTime, map, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private search$ = new BehaviorSubject('');
  public contacts: Observable<Contact[]> =
    combineLatest([this.contactService.all(), this.search$]).pipe(
      debounceTime(200),
      map(([cs, str]) => cs.filter(c => c.name.startsWith(str))),
      map(cs => [...cs].sort((a, b) => a.name.localeCompare(b.name))),
    )

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) { }

  public updateSearch(str: string) {
    this.search$.next(str);
  }

  async showDetails(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsComponent,
      componentProps: {
        contact
      }
    });

    await modal.present();
  }

}
