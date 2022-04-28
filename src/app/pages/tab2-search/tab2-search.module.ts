import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2SearchComponent } from './tab2-search.component';
import { Tab2SearchRoutingModule } from './tab2-search-routing.module';
import { SearchCategoriesModule } from '../../components/search-categories/search-categories.module';
import { SearchPopularNewsModule } from '../../components/search-popular-news/search-popular-news.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2SearchRoutingModule,
    SearchCategoriesModule,
    SearchPopularNewsModule
  ],
  declarations: [Tab2SearchComponent]
})
export class Tab2SearchModule { }
