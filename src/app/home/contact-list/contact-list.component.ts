import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../shared/store/contacts.service';
import { Contact } from '../../../app/shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  constructor(public service: ContactsService, private router: Router) {}

  trackByContact(index: number, contact: Contact) {
    return contact.email;
  }
}
