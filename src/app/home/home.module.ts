import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* third modules */
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ButtonAddContactComponent } from './button-add-contact/button-add-contact.component';

/* pipe */
import { ModalContactPipe } from './modal-contact/modal-contact.pipe';
import { ContactItemComponent } from './contact-item/contact-item.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactListComponent,
    ModalContactComponent,
    ButtonAddContactComponent,
    ModalContactPipe,
    ContactItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
})
export class HomeModule {}
