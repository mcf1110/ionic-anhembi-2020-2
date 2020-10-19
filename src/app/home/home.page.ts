import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export interface Contact {
  name: string;
  email: string;
  username: string;
  phone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts: Contact[] = [
    {name: 'Matheus', email: 'matheus.fernandes@anhembi.br', username: 'mcf1110', phone: '13 99999-9999'},
    {name: 'Derek', email: 'email@anhembi.br', username: 'derekSaga', phone: '13 99999-9999'},
    {name: 'Paulo', email: 'paulo@anhembi.br', username: 'pvictorchu', phone: '13 99999-9999'},
    {name: 'Gustavo', email: 'gustavo@anhembi.br', username: 'gustavoJSantos', phone: '13 99999-9999'},
    {name: 'Matheus Eli', email: 'email@anhembi.br', username: 'MatheusEli', phone: '11 99999-9999'},
    {name: 'Luiz Poluceno', email: 'luiz@anhembi.com', username: 'MrPoluceno', phone: '11 96969-0420'},

  ]

  constructor(private modalController: ModalController) {}

  public async openModal(contact: Contact){
    const modal = await this.modalController.create({
      component: ContactDetailsComponent,
      componentProps: {
        contact
      }
    });
    modal.present();
  }

}
