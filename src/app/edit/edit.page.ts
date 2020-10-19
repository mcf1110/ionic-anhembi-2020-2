import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../home/home.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private contacts: Contact[] = [
    {name: 'Matheus', email: 'matheus.fernandes@anhembi.br', username: 'mcf1110', phone: '13 99999-9999'},
    {name: 'Derek', email: 'email@anhembi.br', username: 'derekSaga', phone: '13 99999-9999'},
    {name: 'Paulo', email: 'paulo@anhembi.br', username: 'pvictorchu', phone: '13 99999-9999'},
    {name: 'Gustavo', email: 'gustavo@anhembi.br', username: 'gustavoJSantos', phone: '13 99999-9999'},
    {name: 'Matheus Eli', email: 'email@anhembi.br', username: 'MatheusEli', phone: '11 99999-9999'},
    {name: 'Luiz Poluceno', email: 'luiz@anhembi.com', username: 'MrPoluceno', phone: '11 96969-0420'},
  ];

  public contact: Contact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.username === username);
  }

  public handleSave(){
    console.log(this.contact);
  }

}
