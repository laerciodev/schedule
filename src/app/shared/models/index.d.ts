export interface Contact {
  name: string;
  email: string;
  tel: string;
  backgroundColor: string;
}

export interface ContactState {
  contacts: Contact[];
}

export interface ModalState {
  modalIsOpen: boolean;
}

export type Modal = 'ADD' | 'EDIT' | 'DELETE';
