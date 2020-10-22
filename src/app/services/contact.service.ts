import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Contact {
  name: string;
  username: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [];

  constructor(private storage: Storage) {
    this.storage.get('contacts')
      .then(storedContacts => this.contacts.push(...storedContacts))
  }

  public all() {
    return this.contacts;
  }

  public get(username: string) {
    return this.contacts.find(c => c.username === username);
  }

  public create(contact: Contact) {
    this.contacts.push({ ...contact });
    this.storage.set('contacts', this.contacts);
  }

  public update(contact: Contact, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.storage.set('contacts', this.contacts);
  }
}
