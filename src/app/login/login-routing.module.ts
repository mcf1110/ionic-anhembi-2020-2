import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../guards/guest.guard';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule { }
