import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3SaveComponent } from './tab3-save.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3SaveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2SaveRoutingModule { }
