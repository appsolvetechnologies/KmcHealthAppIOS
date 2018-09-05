import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MalariasymptomsbngliPage } from '../malariasymptomsbngli/malariasymptomsbngli';
import { MalariadiagnosisbngliPage } from '../malariadiagnosisbngli/malariadiagnosisbngli';
import { MalariadobngliPage } from '../malariadobngli/malariadobngli';
import { MalariadontbngliPage } from '../malariadontbngli/malariadontbngli';
import { MalariatreatmentbngliPage } from '../malariatreatmentbngli/malariatreatmentbngli';

/**
 * Generated class for the MalariabngliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-malariabngli',
  templateUrl: 'malariabngli.html',
})
export class MalariabngliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalariabngliPage');
  }

  navigate(param) {
    if(param==1)
    this.navCtrl.push(MalariasymptomsbngliPage); 
    if(param==2)
    this.navCtrl.push(MalariadiagnosisbngliPage);
    if(param==3)
    this.navCtrl.push(MalariadobngliPage);
    if(param==4)
    this.navCtrl.push(MalariadontbngliPage);
    if(param==5)
    this.navCtrl.push(MalariatreatmentbngliPage);
  }

}
