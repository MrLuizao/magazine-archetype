/**
 * Category Services
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor() { }

  allCategories() {
    return [
      {
        name: 'World',
        totalArticles: 58,
        color: '#a8e6cf'
      },
      {
        name: 'Business',
        totalArticles: 100,
        color: '#dcedc1'
      },
      {
        name: 'Tech',
        totalArticles: 80,
        color: '#ffd3b6'
      },
      {
        name: 'Science',
        totalArticles: 35,
        color: '#ffd7d3'
      },
      {
        name: 'Health',
        totalArticles: 60,
        color: '#d1ffbd'
      },
      {
        name: 'Sports',
        totalArticles: 98,
        color: '#FFDCF4'
      },
      {
        name: 'Politics',
        totalArticles: 30,
        color: '#ffefd7'
      },
      {
        name: 'Arts',
        totalArticles: 20,
        color: '#d2e7ff'
      },
      {
        name: 'Food',
        totalArticles: 105,
        color: '#e9edbd'
      },
      {
        name: 'Travel',
        totalArticles: 55,
        color: '#e3c9c9'
      },
      {
        name: 'Education',
        totalArticles: 56,
        color: '#FFFFD8'
      },
      {
        name: 'Interest',
        totalArticles: 200,
        color: '#F0DEFD'
      },
      {
        name: 'LifeStyle',
        totalArticles: 60,
        color: '#f2f0e6'
      },
      {
        name: 'Blogs',
        totalArticles: 80,
        color: '#fffee4'
      },
      {
        name: 'Videos',
        totalArticles: 30,
        color: '#ffffbf'
      },
      {
        name: 'Cricket',
        totalArticles: 200,
        color: '#ffdadc'
      }
    ]
  }
}