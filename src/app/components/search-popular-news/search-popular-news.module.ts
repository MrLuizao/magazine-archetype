import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPopularNewsComponent } from './search-popular-news.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [SearchPopularNewsComponent],
  exports: [SearchPopularNewsComponent]
})
export class SearchPopularNewsModule { }