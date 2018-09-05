import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MalariasymptomsengPage } from '../malariasymptomseng/malariasymptomseng';
import { MalariadoengPage } from '../malariadoeng/malariadoeng';
import { MalariadontengPage } from '../malariadonteng/malariadonteng';
import { MalariadiagnosisengPage } from '../malariadiagnosiseng/malariadiagnosiseng';
import { MalariatreatmentengPage } from '../malariatreatmenteng/malariatreatmenteng';

/**
 * Generated class for the MalariaengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-malariaeng',
  templateUrl: 'malariaeng.html',
})
export class MalariaengPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalariaengPage');
  }
  navigate(param) {
    if(param==1)
    this.navCtrl.push(MalariasymptomsengPage);
    if(param==2)
    this.navCtrl.push(MalariadoengPage);
    if(param==3)
    this.navCtrl.push(MalariadontengPage);
    if(param==4)
    this.navCtrl.push(MalariadiagnosisengPage);
    if(param==5)
    this.navCtrl.push(MalariatreatmentengPage);    
  }

}
