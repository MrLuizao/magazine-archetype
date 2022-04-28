import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHotNewsComponent } from './home-hot-news.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [HomeHotNewsComponent],
  exports: [HomeHotNewsComponent]
})
export class HomeHotNewsModule { }