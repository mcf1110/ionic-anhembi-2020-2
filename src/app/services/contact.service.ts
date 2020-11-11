import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.storage.get('contacts').then((c: Contact[]) => {
      if (c) {
        this.contacts = c;
        this.emit();
      }
    });
  }

  private contacts: Contact[] = [];
  private contactsSubject = new BehaviorSubject<Contact[]>([]);

  private emit() {
    this.contactsSubject.next([...this.contacts]);
  }

  public all() {
    return this.contactsSubject.asObservable();
  }

  public create(contact: Contact) {
    this.contacts.push({ ...contact });
    this.storage.set('contacts', this.contacts);
    this.emit();
  }

  public find(username: string): Observable<Contact> {
    return this.contactsSubject.pipe(
      map(cs => ({ ...cs.find(c => c.username === username) }))
    );
  }

  public update(contact: Contact, username: string) {
    const idx = this.contacts.findIndex(c => c.username === username);
    this.contacts[idx] = { ...contact };
    this.storage.set('contacts', this.contacts);
    this.emit();
  }
}
