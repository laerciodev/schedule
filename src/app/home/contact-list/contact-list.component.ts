import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private store: Store<{ contacts: Contact[] }>,
    private router: Router
  ) {
    this.contacts$ = store.select('contacts');
  }

  ngOnInit(): void {}

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
