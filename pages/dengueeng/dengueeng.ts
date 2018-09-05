import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguesymptomsPage } from '../denguesymptoms/denguesymptoms';
import { DenguedoengPage } from '../denguedoeng/denguedoeng';
import { DenguedontengPage } from '../denguedonteng/denguedonteng';
import { DenguetreatmentengPage } from '../denguetreatmenteng/denguetreatmenteng';
import { DenguediagnosisengPage } from '../denguediagnosiseng/denguediagnosiseng';
import { DenguesymptomsengPage } from '../denguesymptomseng/denguesymptomseng';
/**
 * Generated class for the DengueengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dengueeng',
  templateUrl: 'dengueeng.html',
})
export class DengueengPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DengueengPage');
  }

  navigate(param) {
    if(param==1)
    this.navCtrl.push(DenguesymptomsengPage);
    if(param==2)
    this.navCtrl.push(DenguedoengPage);
    if(param==3)
    this.navCtrl.push(DenguedontengPage);
    if(param==4)
    this.navCtrl.push(DenguediagnosisengPage);
    if(param==5)
    this.navCtrl.push(DenguetreatmentengPage);    
  }

}
