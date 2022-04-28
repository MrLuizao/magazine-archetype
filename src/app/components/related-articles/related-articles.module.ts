import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatedArticlesComponent } from './related-articles.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RelatedArticlesComponent],
  exports: [RelatedArticlesComponent]
})
export class RelatedArticlesModule { }