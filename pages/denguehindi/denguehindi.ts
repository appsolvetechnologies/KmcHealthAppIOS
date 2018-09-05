import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguesymptomshindiPage } from '../denguesymptomshindi/denguesymptomshindi';
import { DenguediagnosishindiPage } from '../denguediagnosishindi/denguediagnosishindi';
import { DenguedohindiPage } from '../denguedohindi/denguedohindi';
import { DenguedonthindiPage } from '../denguedonthindi/denguedonthindi';
import { DenguetreatmenthindiPage } from '../denguetreatmenthindi/denguetreatmenthindi';

/**
 * Generated class for the DenguehindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denguehindi',
  templateUrl: 'denguehindi.html',
})
export class DenguehindiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenguehindiPage');
  }
  navigate(param) {
    if(param==1)
    this.navCtrl.push(DenguesymptomshindiPage);
    if(param==2)
    this.navCtrl.push(DenguediagnosishindiPage);
    if(param==3)
    this.navCtrl.push(DenguedohindiPage);
    if(param==4)
    this.navCtrl.push(DenguedonthindiPage);
    if(param==5)
    this.navCtrl.push(DenguetreatmenthindiPage);
  } 

}
