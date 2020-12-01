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
