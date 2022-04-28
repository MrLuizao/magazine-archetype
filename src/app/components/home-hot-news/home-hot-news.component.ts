/**
 * Hot News Component (Home Page)
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hot-news',
  templateUrl: './home-hot-news.component.html',
  styleUrls: ['./home-hot-news.component.scss'],
})
export class HomeHotNewsComponent implements OnInit {

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
