import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* modules */
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HomeModule } from './home/home.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

/* components */
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

/* reducers */
import { contactReducer } from './shared/store/reducers/contact.reducer';
import { metaReducers } from './shared/store/metareducers/storage.metareducer';
import { ContactsService } from './shared/store/contacts.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(
      {
        contacts: contactReducer,
      },
      {
        metaReducers,
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
