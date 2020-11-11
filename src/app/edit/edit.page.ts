import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public contact: Observable<Contact>;
  public username: string;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.contact = this.contactService.find(this.username)
  }

  public handleSave(contact: Contact) {
    this.contactService.update(contact, this.username);
    this.navCtrl.back();
  }

}
