/**
 * Recent News Component (Home Page)
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-recent-news',
  templateUrl: './home-recent-news.component.html',
  styleUrls: ['./home-recent-news.component.scss'],
})
export class HomeRecentNewsComponent implements OnInit {

  articles: any = [];
  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
  };

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
