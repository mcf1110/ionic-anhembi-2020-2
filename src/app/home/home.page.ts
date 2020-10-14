import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  username: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) { }

  private contacts: Contact[] = [
    { name: 'Matheus', email: 'matheus.fernandes@anhembi.br', phone: '13 99999-9999', username: 'mcf1110' },
    { name: 'Matheus', email: 'matheusgatinho@solteiro.com.br', phone: '11 4002-8922', username: 'Matheus' },
    { name: 'Leandro', email: 'leandro.sorbo@gmail.com', phone: '11 99905-9999', username: 'leandrosorbo' },
    { name: 'Geovani Silva', email: 'geovanisilvaf1602@gmail.com', phone: '13 99999-9999', username: 'geosf' },
    { name: 'Renan', email: 'remarozzi@hotmail.com', phone: '11 983044464', username: 'RenanMarozzi' },
    { name: 'Matheus Nogueira', email: 'matheusnogueira@solteiro.com', phone: '13 99999-9999', username: 'matheusnougueira' },
    { name: 'Dudão', email: 'dudao@anhembi.br', phone: '13 99999-9999', username: 'orealdudao' },
    { name: 'Douglas', email: 'douglas.santana1777@gmail.com', phone: '11 98765-4321', username: 'douglas1777' },
  ]

  public sortedContacts = this.contacts.sort((a, b) => a.name.localeCompare(b.name));

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
