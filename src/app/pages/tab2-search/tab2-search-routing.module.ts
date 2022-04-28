import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2SearchComponent } from './tab2-search.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2SearchRoutingModule { }
