import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengueurduPage } from '../dengueurdu/dengueurdu';
import { MalariaurduPage } from '../malariaurdu/malariaurdu';
import { MbdurduPage } from '../mbdurdu/mbdurdu';
import { HealthcenterurduPage } from '../healthcenterurdu/healthcenterurdu';
import { AchievementsurduPage } from '../achievementsurdu/achievementsurdu';
import { BoroughofficeurduPage } from '../boroughofficeurdu/boroughofficeurdu';
import { ContactusurduPage } from '../contactusurdu/contactusurdu';
import { AnnouncementurduPage } from '../announcementurdu/announcementurdu';
import { SosmainengPage } from '../sosmaineng/sosmaineng';


/**
 * Generated class for the HomeurduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeurdu',
  templateUrl: 'homeurdu.html',
})
export class HomeurduPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeurduPage');
  }

  navigate(param) {
    if(param=='dengueurdu')
    this.navCtrl.push(DengueurduPage);
    if(param=='malariaurdu')
    this.navCtrl.push(MalariaurduPage);
    if(param=='mbdurdu')
    this.navCtrl.push(MbdurduPage);
    if(param=='healthcenterurdu')
    this.navCtrl.push(HealthcenterurduPage);
    if(param=='achievementsurdu')
    this.navCtrl.push(AchievementsurduPage);
    if(param=='boroughofficeurdu')
    this.navCtrl.push(BoroughofficeurduPage);
    if(param=='contactusurdu')
    this.navCtrl.push(ContactusurduPage);
    if(param=='announcementurdu')
    this.navCtrl.push(AnnouncementurduPage);
    if(param=='sosmaineng')
    this.navCtrl.push(SosmainengPage);
  }

}
