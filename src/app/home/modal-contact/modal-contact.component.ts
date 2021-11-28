import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Contact, Action, ActionContact } from '../../../app/shared/models';

@UntilDestroy()
@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent implements OnInit, OnChanges {
  @Input() open: boolean;
  @Input() type: Action;
  @Input() contact: Contact;

  @Output() close = new EventEmitter();
  @Output() sendContact = new EventEmitter<ActionContact>();

  form: FormGroup;
  mask = '(00) 00000 - 0000';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    if (this.contact) {
      const controls = ['name', 'email', 'telephone'];
      controls.forEach(control => {
        this.form.controls[control].setValue(this.contact[control]);
      })
    }

    if (this.type === 'ADD') {
      this.cleanForm();
    }
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      telephone: [''],
    });
  }

  cleanForm() {
    this.form.reset();
  }

  closeModal() {
    this.close.emit('');
    this.cleanForm();
    this.contact = null;
  }

  sendContactData() {
    const action = this.type;
    const contact = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      telephone: this.form.controls.telephone.value,
      id: this.contact?.id 
    };
    this.sendContact.emit({ contact, action });
    this.closeModal();
  }
}
