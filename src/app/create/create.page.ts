import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyContact: Contact = {
    email: '',
    name: '',
    phone: '',
    username: ''
  };

  constructor(
    private contactService: ContactService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public handleSave() {
    this.contactService.create(this.emptyContact);
    this.navCtrl.back();
  }

}
