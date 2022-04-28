import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4SettingsComponent } from './tab4-settings.component';
import { Tab4SettingsRoutingModule } from './tab4-settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4SettingsRoutingModule
  ],
  declarations: [Tab4SettingsComponent]
})
export class Tab4SettingsModule { }
