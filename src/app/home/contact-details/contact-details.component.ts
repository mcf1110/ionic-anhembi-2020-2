import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Contact} from '../home.page'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  public closeModal(){
    this.modalController.dismiss();
  }

}
