/**
 * Article Details Screen Page Component
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { Location } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {

  slugurl: any;
  articleDetails: any;

  constructor(private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private location: Location,
    private storageService: StorageService,
    private globalService: GlobalService) { }

  ngOnInit() {
    // Get Slug URL
    this.route.params.subscribe(params => {
      this.slugurl = params['id'];

      // Get Article Details Infos By Specific Slug URL
      this.articleDetails = this.articlesService.getArticleByUrl(this.slugurl);
    });
  }

  // Save Article Function
  saveArticle() {
    this.storageService.setObject(this.articleDetails);
    this.globalService.presentAlert('Success', 'This article are saved, find your articles in SAVE tab');
  }

  // Back To Previous Page
  backPreviousRoute() {
    this.location.back();
  }
}
