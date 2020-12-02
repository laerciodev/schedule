import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  save,
  deleteContact,
  editContact,
} from '../../shared/store/actions/contact.action';
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
    private store: Store,
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
          this.store
            .select(getContactByIndex(id))
            .pipe(untilDestroyed(this))
            .subscribe((contact: Contact) => {
              this.form.setValue({ ...contact });
            });
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

  save() {
    const contact = this.form.value;
    this.store.dispatch(save({ contact }));
  }

  edit(index: number) {
    this.store.dispatch(editContact({ contact: this.form.value, index }));
  }

  delete(index: number) {
    this.store.dispatch(deleteContact({ index }));
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
