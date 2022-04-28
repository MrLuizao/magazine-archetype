/**
 * Search Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2-search',
  templateUrl: './tab2-search.component.html',
  styleUrls: ['./tab2-search.component.scss'],
})
export class Tab2SearchComponent implements OnInit {

  articles: any = [];
  searchResult: any = [];
  isArticleAvailable: Boolean = false;

  constructor(private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit() {
    this.getAllArticles();
  }

  // Get All Articles
  getAllArticles() {
    this.articles = this.articlesService.getNewsArticles();
  }

  gotoArticleDetailsPage(article) {
    this.router.navigate(['/article-details', article.slugurl]);
  }

  // Get Search Result
  getSearchArticles(ev: any) {
    this.searchResult = [];
    this.getAllArticles();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the restaurants
    if (val && val.trim() != '') {
      this.isArticleAvailable = true;
      this.searchResult = this.articles.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
