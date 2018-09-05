import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MalariasymptomshindiPage } from '../malariasymptomshindi/malariasymptomshindi';
import { MalariadiagnosishindiPage } from '../malariadiagnosishindi/malariadiagnosishindi';
import { MalariadohindiPage } from '../malariadohindi/malariadohindi';
import { MalariadonthindiPage } from '../malariadonthindi/malariadonthindi';
import { MalariatreatmenthindiPage } from '../malariatreatmenthindi/malariatreatmenthindi';


/**
 * Generated class for the MalariahindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-malariahindi',
  templateUrl: 'malariahindi.html',
})
export class MalariahindiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalariahindiPage');
  }

  navigate(param) {
    if(param==1)
    this.navCtrl.push(MalariasymptomshindiPage);
    if(param==2)
    this.navCtrl.push(MalariadiagnosishindiPage);
    if(param==3)
    this.navCtrl.push(MalariadohindiPage);
    if(param==4)
    this.navCtrl.push(MalariadonthindiPage);
    if(param==5)
    this.navCtrl.push(MalariatreatmenthindiPage);
  } 
}
