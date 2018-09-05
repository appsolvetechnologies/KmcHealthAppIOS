import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MalariasymptomsurduPage } from '../malariasymptomsurdu/malariasymptomsurdu';
import { MalariadourduPage } from '../malariadourdu/malariadourdu';
import { MalariadonturduPage } from '../malariadonturdu/malariadonturdu';
import { MalariadiagnosisurduPage } from '../malariadiagnosisurdu/malariadiagnosisurdu';
import { MalariatreatmenturduPage } from '../malariatreatmenturdu/malariatreatmenturdu';


/**
 * Generated class for the TestbenglipagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testbenglipage',
  templateUrl: 'testbenglipage.html',
})
export class TestbenglipagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestbenglipagePage');
  }

  navigate(param) {
    if(param==1)
    this.navCtrl.push(MalariasymptomsurduPage);
    if(param==2)
    this.navCtrl.push(MalariadourduPage);
    if(param==3)
    this.navCtrl.push(MalariadonturduPage);
    if(param==4)
    this.navCtrl.push(MalariadiagnosisurduPage);
    if(param==5)
    this.navCtrl.push(MalariatreatmenturduPage);
  } 

  
}
