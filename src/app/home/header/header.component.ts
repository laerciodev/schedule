import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<{ contacts: Contact[] }>) {
    this.contacts$ = store.select('contacts');
  }

  ngOnInit(): void {}
}
