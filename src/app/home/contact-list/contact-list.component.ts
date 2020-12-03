import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../shared/store/contacts.service';
import { Contact } from '../../../app/shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(public service: ContactsService, private router: Router) {}

  ngOnInit(): void {}

  trackByContact(index: number, contact: Contact) {
    return contact.email;
  }

  edit(id: number) {
    this.router.navigateByUrl(`home/(modal:edit/${id})`, {
      skipLocationChange: true,
    });
  }

  deleteContact(id: number) {
    this.router.navigateByUrl(`home/(modal:delete/${id})`, {
      skipLocationChange: true,
    });
  }
}
