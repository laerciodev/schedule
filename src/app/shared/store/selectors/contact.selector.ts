import { createSelector } from '@ngrx/store';
import { ContactState } from '../../models';

export const selectAllContacts = (state: ContactState) => state.contacts;

export const getContactByIndex = (index: number) =>
  createSelector(selectAllContacts, (allContacts) => {
    if (allContacts.length > 0) {
      return allContacts[index];
    } else {
      return [];
    }
  });

export const getContactByName = (name: string) =>
  createSelector(selectAllContacts, (allContacts) => {
    if (allContacts.length > 0) {
      return allContacts.filter((contact) => contact.name === name);
    } else {
      return allContacts;
    }
  });
