import { createAction, props } from '@ngrx/store';
import { Contact } from '../models';

export const save = createAction(
  '[Add Contact Modal] Add',
  props<{ contact: Contact }>()
);
