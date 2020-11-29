import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  showModal: boolean;
  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(value: boolean) {
    this.showModal = value;
  }
}
