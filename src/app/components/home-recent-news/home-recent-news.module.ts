import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeRecentNewsComponent } from './home-recent-news.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [HomeRecentNewsComponent],
  exports: [HomeRecentNewsComponent]
})
export class HomeRecentNewsModule { }