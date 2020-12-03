import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  save,
  deleteContact,
  editContact,
} from '../../shared/store/actions/contact.action';
import { ContactsService } from 'src/app/shared/store/contacts.service';
import { getContactByIndex } from '../../../app/shared/store/selectors/contact.selector';
import { Contact, Modal } from '../../../app/shared/models';

@UntilDestroy()
@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact;
  modal: Modal = 'ADD';
  indexContact: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setModal();
    this.initForm();
    this.initRoute();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      tel: [''],
    });
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {});
  }

  initRoute() {
    this.route.params.pipe(untilDestroyed(this)).subscribe(({ id }) => {
      if (id) {
        this.indexContact = id;
        if (this.modal === 'EDIT') {
          const contact = this.contactService.getContactById(id);
          this.form.setValue(contact);
        }
      }
    });
  }

  setModal() {
    let route = this.router.url;

    route = route.replace(/\d+/g, '');

    const routes = {
      '/home/(modal:add/)': 'ADD',
      '/home/(modal:edit/)': 'EDIT',
      '/home/(modal:delete/)': 'DELETE',
    };

    for (let property in routes) {
      if (
        routes.hasOwnProperty(property) &&
        property.toString().startsWith(route)
      ) {
        this.modal = routes[route];
        break;
      }
    }
  }

  close() {
    this.router.navigateByUrl('/');
    this.form.reset();
  }

  getRandomColor(): string {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  save() {
    const contact: Contact = {
      ...this.form.value,
      backgroundColor: this.getRandomColor(),
    };
    this.contactService.save(contact);
  }

  edit(index: number) {
    this.contactService.edit(index, this.form.value);
  }

  delete(index: number) {
    this.contactService.delete(index);
  }

  dispatch(type: Modal) {
    const actions = {
      ADD: () => {
        this.save();
      },
      EDIT: () => {
        this.edit(this.indexContact);
      },
      DELETE: () => {
        this.delete(this.indexContact);
      },
    };

    actions[type]();

    this.close();
  }
}
