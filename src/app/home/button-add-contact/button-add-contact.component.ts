import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-add-contact',
  templateUrl: './button-add-contact.component.html',
  styleUrls: ['./button-add-contact.component.scss'],
})
export class ButtonAddContactComponent implements OnInit {
  @Input() height: string;
  @Output() addContact = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.addContact.emit('ADD');
  }
}
