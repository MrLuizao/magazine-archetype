import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1HomeComponent } from './tab1-home.component';
import { Tab1HomeRoutingModule } from './tab1-home-routing.module';
import { HomeCategoriesModule } from '../../components/home-categories/home-categories.module';
import { HomeRecentNewsModule } from '../../components/home-recent-news/home-recent-news.module';
import { HomeHotNewsModule } from '../../components/home-hot-news/home-hot-news.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1HomeRoutingModule,
    HomeCategoriesModule,
    HomeRecentNewsModule,
    HomeHotNewsModule
  ],
  declarations: [Tab1HomeComponent]
})
export class Tab1HomeModule { }
