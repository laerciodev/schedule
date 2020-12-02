import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { getContactByName } from '../../shared/store/selectors/contact.selector';
import { Contact } from 'src/app/shared/models';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  form: FormGroup;

  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.contacts$ = store.select('contacts');
  }

  ngOnInit(): void {
    this.initForm();
    this.inputSearch.valueChanges
      .pipe(untilDestroyed(this), debounceTime(300))
      .subscribe((termSearch) =>
        this.store.select(getContactByName(termSearch))
      );
  }

  initForm(): void {
    this.form = this.fb.group({
      inputSearch: [''],
    });
  }

  get inputSearch(): AbstractControl {
    return this.form.get('inputSearch');
  }
}
