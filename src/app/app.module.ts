import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* modules */
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

/* components */
import { AppComponent } from './app.component';
import { ContactsService } from './shared/store/contacts.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
