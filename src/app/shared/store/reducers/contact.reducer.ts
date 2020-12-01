import { createReducer, on, Action } from '@ngrx/store';
import { save, deleteContact, editContact } from '../actions/contact.action';
import { Contact } from '../../models';

export const initialState: Contact[] = [];

const _contactReducer = createReducer(
  initialState,
  on(save, (state, payload) => [...state, payload]),
  on(deleteContact, (state, { index }) => [
    ...state.slice(0, index),
    ...state.slice(index + 1),
  ])
);

export function contactReducer(state: Contact[], action: Action) {
  return _contactReducer(state, action);
}
