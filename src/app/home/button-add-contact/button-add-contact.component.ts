import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openModal } from '../../shared/store/actions/modal.action';

@Component({
  selector: 'button-add-contact',
  templateUrl: './button-add-contact.component.html',
  styleUrls: ['./button-add-contact.component.scss'],
})
export class ButtonAddContactComponent implements OnInit {
  @Input() height: string;

  constructor(private store: Store<{ modal: boolean }>) {}

  ngOnInit(): void {}

  openModal(): void {
    this.store.dispatch(openModal());
  }
}
