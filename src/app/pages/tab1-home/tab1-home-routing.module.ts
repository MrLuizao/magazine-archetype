import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1HomeComponent } from './tab1-home.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1HomeRoutingModule { }
