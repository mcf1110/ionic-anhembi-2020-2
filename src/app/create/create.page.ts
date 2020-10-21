import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyContact = {
    name: '',
    email: '',
    phone: '',
    username: ''
  };

  constructor(
    private contactService: ContactService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  handleSave() {
    this.contactService.create(this.emptyContact);
    this.navCtrl.back();
  }

}
