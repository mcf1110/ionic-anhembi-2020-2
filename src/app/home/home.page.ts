import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,
    private contactService: ContactService
  ) { }

  public sortedContacts = this.contactService.all();

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
