import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* third modules */
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ButtonAddContactComponent } from './button-add-contact/button-add-contact.component';

/* pipe */
import { ModalContactPipe } from './modal-contact/modal-contact.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactListComponent,
    ModalContactComponent,
    ButtonAddContactComponent,
    ModalContactPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class HomeModule {}
