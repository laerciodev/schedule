export interface Contact {
  id: string
  name: string;
  email: string;
  telephone: string;
}

export interface ContactState {
  contacts: Contact[];
}

export interface ModalState {
  modalIsOpen: boolean;
}

export type Modal = 'ADD' | 'EDIT' | 'DELETE';
