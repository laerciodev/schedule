import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* third modules */
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactListComponent,
    AddContactComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule.forRoot()],
})
export class HomeModule {}
