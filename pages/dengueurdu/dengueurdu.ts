import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguesymptomsurduPage } from '../denguesymptomsurdu/denguesymptomsurdu';
import { DenguedourduPage } from '../denguedourdu/denguedourdu';
import { DenguedonturduPage } from '../denguedonturdu/denguedonturdu';
import { DenguediagnosisurduPage } from '../denguediagnosisurdu/denguediagnosisurdu';
import { DenguetreatmenturduPage } from '../denguetreatmenturdu/denguetreatmenturdu';

/**
 * Generated class for the DengueurduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dengueurdu',
  templateUrl: 'dengueurdu.html',
})
export class DengueurduPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DengueurduPage');
  }
  navigate(param) {
    if(param==1)
    this.navCtrl.push(DenguesymptomsurduPage);
    if(param==2)
    this.navCtrl.push(DenguedourduPage);
    if(param==3)
    this.navCtrl.push(DenguedonturduPage);
    if(param==4)
    this.navCtrl.push(DenguediagnosisurduPage);
    if(param==5)
    this.navCtrl.push(DenguetreatmenturduPage);
  } 

}
