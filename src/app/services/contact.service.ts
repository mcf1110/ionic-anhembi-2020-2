import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private storage: Storage) {
    this.storage.get('contacts').then(c => c && this.contacts.push(...c));
  }

  private contacts: Contact[] = []

  public all() {
    return this.contacts;
  }

  public create(contact: Contact) {
    this.contacts.push({ ...contact });
    this.storage.set('contacts', this.contacts);
  }

  public find(username: string) {
    return { ...this.contacts.find(c => c.username === username) }
  }

  public update(contact: Contact, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.storage.set('contacts', this.contacts);
  }
}
