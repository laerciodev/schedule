import { createAction, props } from '@ngrx/store';
import { Contact } from '../../models';

export const save = createAction(
  '[Add Contact Modal] Add',
  props<{ contact: Contact }>()
);

export const deleteContact = createAction(
  '[Icon Delete] Delete Contact',
  props<{ index: number }>()
);

export const editContact = createAction(
  '[Icon Edit] Edit Contact',
  props<{ contact: Contact; index: number }>()
);
