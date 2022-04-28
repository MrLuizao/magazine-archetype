import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1-home',
        loadChildren: () => import('../pages/tab1-home/tab1-home.module').then(m => m.Tab1HomeModule)
      },
      {
        path: 'tab2-search',
        loadChildren: () => import('../pages/tab2-search/tab2-search.module').then(m => m.Tab2SearchModule)
      },
      {
        path: 'tab3-save',
        loadChildren: () => import('../pages/tab3-save/tab3-save.module').then(m => m.Tab3SaveModule)
      },
      {
        path: 'tab4-settings',
        loadChildren: () => import('../pages/tab4-settings/tab4-settings.module').then(m => m.Tab4SettingsModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../pages/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'articles/:category',
        loadChildren: () => import('../pages/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
