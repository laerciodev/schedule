import { createReducer, on, Action } from '@ngrx/store';
import { save, deleteContact, editContact } from '../actions/contact.action';
import { Contact } from '../../models';

export const initialState: Contact[] = [];

const _contactReducer = createReducer(
  initialState,
  on(save, (state, { contact }) => [...state, contact]),
  on(deleteContact, (state, { index }) => [
    ...state.slice(0, index),
    ...state.slice(index + 1),
  ]),
  on(editContact, (state, { contact, index }) => {
    return [...state.slice(0, index), contact, ...state.slice(index + 1)];
  })
);

export function contactReducer(state: Contact[], action: Action) {
  return _contactReducer(state, action);
}
