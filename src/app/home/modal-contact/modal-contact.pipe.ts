import { Pipe, PipeTransform } from '@angular/core';

const titles = {
  ADD: 'Criar novo contato',
  EDIT: 'Editar contato',
  DELETE: 'Deletar contato',
};

@Pipe({ name: 'title' })
export class ModalContactPipe implements PipeTransform {
  transform(value: string): string {
    return titles[value];
  }
}
