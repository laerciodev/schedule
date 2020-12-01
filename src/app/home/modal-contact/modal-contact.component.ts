import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pluck } from 'rxjs/operators';
import { save } from '../../shared/store/actions/contact.action';
import { getContactByIndex } from '../../../app/shared/store/selectors/contact.selector';
import { Contact } from '../../../app/shared/models';

@UntilDestroy()
@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
        this.store
          .select(getContactByIndex(id))
          .pipe(pluck('contact'), untilDestroyed(this))
          .subscribe((contact: Contact) => {
            this.form.setValue({ ...contact });
          });
      }
    });
  }

  close() {
    this.router.navigateByUrl('/');
    this.form.reset();
  }

  save() {
    const contact = this.form.value;
    this.store.dispatch(save({ contact }));
    this.close();
  }
}
