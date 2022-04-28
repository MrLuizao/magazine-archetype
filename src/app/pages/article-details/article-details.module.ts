import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleDetailsComponent } from './article-details.component';
import { ArticleDetailsRoutingModule } from './article-details-routing.module';
import { RelatedArticlesModule } from '../../components/related-articles/related-articles.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ArticleDetailsRoutingModule,
    RelatedArticlesModule
  ],
  declarations: [ArticleDetailsComponent]
})
export class ArticleDetailsModule { }
