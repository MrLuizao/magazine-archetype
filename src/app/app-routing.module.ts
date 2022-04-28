import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'article-details/:id',
    loadChildren: () => import('./pages/article-details/article-details.module').then(m => m.ArticleDetailsModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/auth/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./pages/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
