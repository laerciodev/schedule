import { createAction, props } from '@ngrx/store';
import { Contact } from '../../models';

export const save = createAction(
  '[Add Contact Modal] Add contact',
  props<{ contact: Contact }>()
);

export const deleteContact = createAction(
  '[Icon Delete] Delete contact',
  props<{ index: number }>()
);

export const editContact = createAction(
  '[Icon Edit] Edit contact',
  props<{ contact: Contact; index: number }>()
);

export const filterContacts = createAction(
  '[Search Input] Filter contacts',
  props<{ name: string }>()
);
