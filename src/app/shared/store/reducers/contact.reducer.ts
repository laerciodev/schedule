import { createReducer, on, Action } from '@ngrx/store';
import { save } from '../actions/contact.action';
import { Contact } from '../../models';

export const initialState: Contact[] = [];

const _contactReducer = createReducer(
  initialState,
  on(save, (state, payload) => [...state, payload])
);

export function contactReducer(state: Contact[], action: Action) {
  return _contactReducer(state, action);
}
