import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models';
import { remove } from 'lodash';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private contacts: Contact[] = [];
  private contactsBS = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this.contactsBS.asObservable();

  public save(contact: Contact): void {
    this.contacts.push(contact);
    this.contactsBS.next(this.contacts);
  }

  public edit(index: number, contact: Contact): void {
    this.contacts.splice(index, 1, contact);
    this.contactsBS.next(this.contacts);
  }

  public delete(index: number) {
    if (this.contacts.length > 0) {
      this.contacts.splice(index, 1);
      this.contactsBS.next(this.contacts);
    }
  }

  public getContactById(id: number): Contact {
    return this.contacts[id];
  }

  public search(name: string) {
    const contact = this.contacts.find(
      (contact) => contact.name.toLowerCase() === name
    );
    if (contact) {
      this.contactsBS.next([contact]);
    } else {
      this.contactsBS.next(this.contacts);
    }
  }
}
