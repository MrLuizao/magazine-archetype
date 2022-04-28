/**
 * Related Articles Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-articles',
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss'],
})
export class RelatedArticlesComponent implements OnInit {

  articles: any = [];

  constructor(private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articles = this.articlesService.getNewsArticles();
  }

  async gotoArticleDetailsPage(article) {
    this.router.navigate(['/article-details', article.slugurl]);
  }
}
