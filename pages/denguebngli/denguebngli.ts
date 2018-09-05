import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguesymptomsbngliPage } from '../denguesymptomsbngli/denguesymptomsbngli';
import { DenguediagnosisbngliPage } from '../denguediagnosisbngli/denguediagnosisbngli';
import { DenguedobngliPage } from '../denguedobngli/denguedobngli';
import { DenguedontbngliPage } from '../denguedontbngli/denguedontbngli';
import { DenguetreatmentbngliPage } from '../denguetreatmentbngli/denguetreatmentbngli';

/**
 * Generated class for the DenguebngliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denguebngli',
  templateUrl: 'denguebngli.html',
})
export class DenguebngliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenguebngliPage');
  }

  navigate(param) {
    if(param==1)
    this.navCtrl.push(DenguesymptomsbngliPage); 
    if(param==2)
    this.navCtrl.push(DenguediagnosisbngliPage);
    if(param==3)
    this.navCtrl.push(DenguedobngliPage);
    if(param==4)
    this.navCtrl.push(DenguedontbngliPage);
    if(param==5)
    this.navCtrl.push(DenguetreatmentbngliPage);
  }

}
