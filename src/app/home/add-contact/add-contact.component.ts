import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { save } from '../../shared/store/contact.action';
import { closeModal } from '../../shared/store/modal.action';

@UntilDestroy()
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ modal: boolean }>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      tel: [''],
    });
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {});
  }

  close() {
    this.store.dispatch(closeModal());
    this.form.reset();
  }

  save() {
    const contact = this.form.value;
    this.store.dispatch(save({ contact }));
    this.close();
  }
}
