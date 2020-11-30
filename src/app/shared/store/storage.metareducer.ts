import { ActionReducer, MetaReducer } from '@ngrx/store';
import { merge } from 'lodash';

function setSavedState(state: any, localStorageKey: string) {
  console.log(state);
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string) {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

const localStorageKey = '__app_storage__';

export function storageMetaReducer(
  contactReducer: ActionReducer<any>
): ActionReducer<any> {
  let onInit = true; // after load/refresh

  // init the application state.
  return function (state, action) {
    const nextState = contactReducer(state, action);
    // reduce the next state
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }

    const { contacts } = nextState;
    const contact = contacts.map((item) => item.contact);
    // save the next state to the application storage.
    setSavedState(contact, localStorageKey);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];
