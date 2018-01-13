import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  declarations: [HomePage],
  // will be lazy load
  imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {}
