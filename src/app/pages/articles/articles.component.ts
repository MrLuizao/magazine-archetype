import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  category: any;
  articles: any;
  grid: Boolean = false;
  oneColumn: Boolean = false;
  list: Boolean = true;

  constructor(private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit() {
    // Get Slug URL
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });

    this.getArticles();
  }

  // Get All Articles
  getArticles() {
    this.articles = this.articlesService.getNewsArticles();
  }

  gotoArticleDetailsPage(article) {
    this.router.navigate(['/article-details', article.slugurl]);
  }

  // One column view function
  showOneColumn() {
    this.oneColumn = true;
    this.grid = false
    this.list = false;
  }

  // Grid view function
  showGrid() {
    this.grid = true;
    this.oneColumn = false;
    this.list = false;
  }

  // List view function
  showList() {
    this.list = true;
    this.grid = false;
    this.oneColumn = false;
  }

}
