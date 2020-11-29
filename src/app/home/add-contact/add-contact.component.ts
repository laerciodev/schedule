import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closeModal = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      tel: [''],
    });
    console.log(this.form);
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {});
  }

  close() {
    this.closeModal.emit(false);
    this.form.reset();
  }

  save() {
    this.close();
  }
}
