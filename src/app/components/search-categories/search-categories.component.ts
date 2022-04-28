/**
 * Categories Component (Search Page)
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrls: ['./search-categories.component.scss'],
})
export class SearchCategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoriesService.allCategories();
  }

  goToArticlesPageByCategory(category) {
    this.router.navigate(['/tabs/articles', category]);
  }
}
