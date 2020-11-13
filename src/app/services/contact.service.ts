import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private contact$ = new BehaviorSubject<Contact[]>([]);

  constructor(private storage: Storage) {
    this.storage.get('contacts')
      .then(storedContacts => {
        this.contacts.push(...storedContacts);
        this.contact$.next([...this.contacts]);
      })
  }

  private saveUpdates() {
    this.storage.set('contacts', this.contacts);
    this.contact$.next([...this.contacts]);
  }

  public all() {
    return this.contact$.asObservable();
  }

  public get(username: string) {
    return this.contacts.find(c => c.username === username);
  }

  public create(contact: Contact) {
    this.contacts.push({ ...contact });
    this.saveUpdates();
  }

  public update(contact: Contact, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.saveUpdates();
  }
}
