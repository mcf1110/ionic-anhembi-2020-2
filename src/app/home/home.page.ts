import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { debounceTime, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) {
  }

  private search$ = new BehaviorSubject('');

  public sortedContacts = combineLatest([this.search$, this.contactService.all()])
    .pipe(
      debounceTime(200),
      map((([s, cs]) => cs.filter(c => c.name.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())))),
      map(cs => cs.sort((a, b) => a.name.localeCompare(b.name)))
    );

  public emitSearch(str: string) {
    this.search$.next(str);
  }

  public async showModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailsComponent,
      componentProps: {
        contact
      }
    });
    modal.present();
  }

}
