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
  stateModal$: Observable<boolean>;
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<{ contacts: Contact[]; modal: boolean }>) {
    this.contacts$ = store.select('contacts');
    this.stateModal$ = store.select('modal');
  }

  ngOnInit(): void {}
}
