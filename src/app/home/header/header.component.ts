import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ContactsService } from '@shared/store/contacts.service';
import { Contact } from '@shared/models';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  form: FormGroup;

  constructor(public service: ContactsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.inputSearch.valueChanges
      .pipe(untilDestroyed(this), debounceTime(1000), distinctUntilChanged())
      .subscribe((termSearch: string) =>
        this.service.search(termSearch.toLowerCase())
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
