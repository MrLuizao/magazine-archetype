import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3SaveComponent } from './tab3-save.component';
import { Tab2SaveRoutingModule } from './tab3-save-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2SaveRoutingModule
  ],
  declarations: [Tab3SaveComponent]
})
export class Tab3SaveModule { }
