import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../app/shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  showModal: boolean;
  contacts: Contact[];

  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(value: boolean) {
    this.showModal = value;
  }
}
