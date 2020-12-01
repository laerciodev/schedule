import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalContactComponent } from './home/modal-contact/modal-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'add',
        component: ModalContactComponent,
        outlet: 'modal',
      },
      {
        path: 'edit/:id',
        component: ModalContactComponent,
        outlet: 'modal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
