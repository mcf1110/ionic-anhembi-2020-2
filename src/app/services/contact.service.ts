import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  username: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [];
  private contacts$ = new BehaviorSubject<Contact[]>([]);

  constructor(private storage: Storage) {
    this.loadData();
  }

  private async loadData() {
    const loaded = await this.storage.get('contacts') as Contact[];
    this.contacts.push(...loaded);
    this.contacts$.next([...this.contacts]);
  }

  private saveData() {
    this.storage.set('contacts', this.contacts);
    this.contacts$.next([...this.contacts]);
  }

  public all() {
    return this.contacts$;
  }

  public create(contact: Contact) {
    this.contacts.push({ ...contact });
    this.saveData();
  }

  public update(contact: Contact, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.saveData();
  }

  public find(username: string) {
    return { ...this.contacts.find(c => c.username === username) };
  }

  public add() {
    this.contacts.push({
      email: 'teste@teste.com',
      name: 'teste',
      phone: '1519651951',
      username: 'teste'
    });
    this.contacts$.next([...this.contacts]);
  }
}
