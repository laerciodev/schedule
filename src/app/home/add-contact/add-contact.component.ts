import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit(false);
  }
}
