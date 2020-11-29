import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../../app/shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  showModal: boolean;
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<{ customers: Contact[] }>) {
    this.contacts$ = store.select('customers');
  }

  ngOnInit(): void {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(value: boolean) {
    this.showModal = value;
  }
}
