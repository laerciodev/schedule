import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionContact, Contact } from '../../../app/shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  constructor() {}

  @Input() contacts: Contact[];
  @Output() sendContact = new EventEmitter();

  trackByContact(index: number, contact: Contact) {
    return contact.email;
  }

  sendContactData(value: ActionContact) {
    this.sendContact.emit(value);
  }

  get emptyResultsFound() {
    return this.contacts.length === 0;
  }
}
