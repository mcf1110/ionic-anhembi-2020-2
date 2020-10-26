import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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

  constructor(private storage: Storage) {
    this.loadData();
  }

  private async loadData() {
    const loaded = await this.storage.get('contacts') as Contact[];
    this.contacts.push(...loaded);
  }

  private saveData() {
    this.storage.set('contacts', this.contacts);
  }

  public all() {
    return this.contacts;
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
}
