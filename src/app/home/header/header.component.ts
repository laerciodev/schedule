import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showButtonAddContacts: boolean;
  @Output() open = new EventEmitter();
  @Output() sendSearchTerm = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.inputSearch.valueChanges
      .pipe(untilDestroyed(this), debounceTime(1000), distinctUntilChanged())
      .subscribe((termSearch: string) =>
        this.sendSearchTerm.emit(termSearch)
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

  openModal(value: string) {
    this.open.emit(value)
  }
}
