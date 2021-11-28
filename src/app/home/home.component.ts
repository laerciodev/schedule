import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActionContact, Contact } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  contact = {} as Contact;
  contacts: Contact[];
  contactsFound: Contact[]; 
  currentModal = '';
  currentContact: Contact;
  currentSearchTerm = '';

  constructor(private contactService: ContactService) {}
  
  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    })
  }

  handleContact(value: ActionContact) {
    const { contact, action } = value;

    const actions = {
      'ADD': () => this.createContact(contact),
      'EDIT': () => this.editContact(value),
      'DELETE': () => this.deleteContact(value),
    }

    actions[action]()
  }

  handleContactData(value: ActionContact) {
    const { action, contact } = value;
    this.setCurrentModal(action);
    this.currentContact = contact;
  }

  createContact(contact: Contact) {
    return this.contactService.createContact(contact).subscribe(() => {
      this.getContacts();
    });
  }

  deleteContact(value: ActionContact) {
    const { contact } = value;
    return this.contactService.deleteContact(contact.id).subscribe(() => {
      this.getContacts();
    });
  }

  editContact(value: ActionContact) {
    const { contact } = value;
    this.contactService.editContact(contact).subscribe(() => {
      this.getContacts();
    });
  }

  searchContact(searchTerm: string) {
    this.currentSearchTerm = searchTerm;
    const contacts = this.contacts.filter(contact => 
      contact.name.toLowerCase() === searchTerm.toLowerCase()
    );
    this.contactsFound = contacts;
  }

  setCurrentModal(modal: string) {
    this.currentModal = modal;
  }

  closeModal(value: string) {
    this.currentModal = value;
  }

  get showModal() {
    return this.currentModal !== '';
  }

  get hasContacts() {
    return this.contacts?.length > 0;
  }

  get hasSearch() {
    return this.currentSearchTerm !== '';
  }

  get showContacts() {
    return this.contactsFound && this.hasSearch 
      ? this.contactsFound
      : this.contacts
  }
}
