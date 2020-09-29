import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesPageRoutingModule } from './likes-routing.module';

import { LikesPage } from './likes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesPageRoutingModule
  ],
  declarations: [LikesPage]
})
export class LikesPageModule {}
