import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglehospitalPage } from './singlehospital';

@NgModule({
  declarations: [
    SinglehospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglehospitalPage),
  ],
})
export class SinglehospitalPageModule {}
