export interface Contact {
  id?: number
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

export interface ActionContact {
  contact: Contact,
  action: Action,
}

export type Action = 'ADD' | 'EDIT' | 'DELETE';
