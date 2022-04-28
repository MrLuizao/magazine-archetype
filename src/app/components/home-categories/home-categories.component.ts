/**
 * Categories Component (Home Page)
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss'],
})
export class HomeCategoriesComponent implements OnInit {

  categories: any = [];

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    loop: false,
    slidesPerView: 4,
  };

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
