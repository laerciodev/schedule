import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-add-contact',
  templateUrl: './button-add-contact.component.html',
  styleUrls: ['./button-add-contact.component.scss'],
})
export class ButtonAddContactComponent implements OnInit {
  @Input() height: string;

  constructor() {}

  ngOnInit(): void {}
}
