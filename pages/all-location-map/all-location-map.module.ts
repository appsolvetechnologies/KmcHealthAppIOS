import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllLocationMapPage } from './all-location-map';

@NgModule({
  declarations: [
    AllLocationMapPage,
  ],
  imports: [
    IonicPageModule.forChild(AllLocationMapPage),
  ],
})
export class AllLocationMapPageModule {}
