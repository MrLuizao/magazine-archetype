/**
 * Categories Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoriesService.allCategories();
  }

}
