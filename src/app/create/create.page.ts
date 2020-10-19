import { Component, OnInit } from '@angular/core';
import { Contact } from '../home/home.page';

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

  constructor() { }

  ngOnInit() {
  }

  public handleSave(){
    console.log(this.emptyContact);
  }

}
