import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4SettingsComponent } from './tab4-settings.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4SettingsRoutingModule { }
