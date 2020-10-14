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
    { name: 'Matheus', email: 'matheus.fernandes@anhembi.br', phone: '13 99999-9999', username: 'mcf1110' },
    { name: 'Matheus', email: 'matheusgatinho@solteiro.com.br', phone: '11 4002-8922', username: 'Matheus' },
    { name: 'Leandro', email: 'leandro.sorbo@gmail.com', phone: '11 99905-9999', username: 'leandrosorbo' },
    { name: 'Geovani Silva', email: 'geovanisilvaf1602@gmail.com', phone: '13 99999-9999', username: 'geosf' },
    { name: 'Renan', email: 'remarozzi@hotmail.com', phone: '11 983044464', username: 'RenanMarozzi' },
    { name: 'Matheus Nogueira', email: 'matheusnogueira@solteiro.com', phone: '13 99999-9999', username: 'matheusnougueira' },
    { name: 'Dudão', email: 'dudao@anhembi.br', phone: '13 99999-9999', username: 'orealdudao' },
    { name: 'Douglas', email: 'douglas.santana1777@gmail.com', phone: '11 98765-4321', username: 'douglas1777' },
  ]

  public contact: Contact;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.username === username);
  }

  public handleSave() {
    console.log(this.contact);
  }

}
