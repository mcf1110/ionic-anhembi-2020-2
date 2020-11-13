import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = this.contactService.all().pipe(
    map(cs => [...cs].sort((a, b) => a.name.localeCompare(b.name))),
  )

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) { }

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
