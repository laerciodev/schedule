import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { openModal, closeModal } from './modal.action';
import { ModalState } from '../models';

const initialState: ModalState = {
  modalIsOpen: false,
};

const _modalReducer = createReducer(
  initialState,
  on(openModal, (state) => {
    return {
      ...state,
      modalIsOpen: true,
    };
  }),
  on(closeModal, (state) => {
    return {
      ...state,
      modalIsOpen: false,
    };
  })
);

export function modalReducer(state: ModalState, action: Action) {
  return _modalReducer(state, action);
}
