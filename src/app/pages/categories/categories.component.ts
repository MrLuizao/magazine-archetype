/**
 * Categories Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(  private categoriesService: CategoriesService,
                public router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    // this.categories = this.categoriesService.allCategories();

    this.categories = [
      {
        name: 'Arts',
        totalArticles: 20,
        url: 'https://pbs.twimg.com/media/FQuwkN_WUAIl01p?format=jpg&name=large'
      },
      {
        name: 'Business',
        totalArticles: 100,
        url: 'https://pbs.twimg.com/media/FQvHd4PXoAQwVel?format=jpg&name=large'
      },
      {
        name: 'Politics',
        totalArticles: 30,
        url: 'https://pbs.twimg.com/media/FQuwkN_WUAIl01p?format=jpg&name=large'
      },
      {
        name: 'Travel',
        totalArticles: 55,
        url: 'https://pbs.twimg.com/media/FQvHd4PXoAQwVel?format=jpg&name=large'
      },
      {
        name: 'Education',
        totalArticles: 56,
        url: 'https://pbs.twimg.com/media/FQuwkN_WUAIl01p?format=jpg&name=large'
      }
    ] 
  }

  openSubscription(){
    this.router.navigateByUrl('subscription');
  }
}
