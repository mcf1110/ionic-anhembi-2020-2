import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikesPage } from './likes.page';

const routes: Routes = [
  {
    path: '',
    component: LikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikesPageRoutingModule {}
