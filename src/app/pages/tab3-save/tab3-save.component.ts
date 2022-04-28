/**
 * Saves Articles Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3-save',
  templateUrl: './tab3-save.component.html',
  styleUrls: ['./tab3-save.component.scss'],
})
export class Tab3SaveComponent implements OnInit {

  articles: any = [];

  constructor(private storageService: StorageService,
    private globalService: GlobalService,
    private router: Router) { }

  ngOnInit() {
    this.getSavedArticles();
  }

  ionViewWillEnter() {
    this.getSavedArticles();
  }

  // Get Saves Articles From Local Storage
  async getSavedArticles() {
    await this.storageService.getObject().then((data) => {
      if (data) {
        this.articles = data;
      } else {
        this.articles = [];
      }
    });
  }

  // Clear Storage Articles
  async clearStorageArticles() {
    this.storageService.clear()
    await this.globalService.presentAlert('Success', 'You removed all saved articles.');
    this.getSavedArticles();
  }

  // Go To Article Details Page
  async gotoArticleDetailsPage(article) {
    this.router.navigate(['/article-details', article.slugurl]);
  }
}
