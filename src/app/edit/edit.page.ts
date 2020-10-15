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
    { name: 'Matheus', email: 'matheus.fernandes@anhembi.br', username: 'mcf1110', phone: '13 99999-9999' },
    { name: 'Bruno', email: 'bruno-alves-silva@hotmail.com', username: 'Brun41v35', phone: '11 4002-8922' },
    { name: 'Lucas', email: 'santoslucas707@gmail.com', username: 'lcsgomes', phone: '13 0000-0000' },
    { name: 'Lucas T', email: 'lucastlf@hotmail.com', username: 'LucasTLF', phone: '11 99221-9891' },
    { name: 'Claudio', email: 'claudin_reudelas@gmail.com', username: 'craudio', phone: '13 0000-0000' },
    { name: 'Mauricio', email: 'mboliveira@mailinator.com', username: 'mboliveira2', phone: '13 99999-9999' },
    { name: 'Vitor', email: 'vitorguerra@gmail.com', username: 'Guerraa', phone: '51 9999-0000' },
    { name: 'Lopes', email: 'raphael.lopes@gmail.com', username: 'Rapha', phone: '13 0000-0000' },
    { name: 'Leonardo', email: 'leeocarletti@gmail.com', username: 'LeonardoCarletti', phone: '11 0101-0101' },
    { name: 'Luiz', email: 'luizclaudio@hotmail.com', username: 'luizclaudio', phone: '11 6777-6132' },
    { name: 'Lucas Sanches', email: 'sanches.lucasc@gmail.com', username: '100Sanches', phone: '13 99999-9999' },
    { name: 'Ricardo', email: 'kztwprst@gmail.com', username: 'RicardoStx', phone: '13 55995-9999' },
    { name: 'Raphael', email: 'Raphael_nask@hotmail.com', username: 'NaskIII', phone: '13 99999-9999' },
    { name: 'Vitor Ms', email: 'vitor_matheuga@hotmail.com', username: 'vitormss', phone: '11 99999-9991' },
    { name: 'Caio Assis Capasso', email: 'caiocapasso@yahoo.com.br', username: 'cacacaiooooo', phone: '13 45663-56235' },
    { name: 'Raphael Henrique Cardoso Chimello', email: 'raphael@123.com', username: 'raphaelhcc', phone: '13 45663-56235' },
  ];

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
