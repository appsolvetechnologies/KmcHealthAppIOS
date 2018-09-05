import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguehindiPage } from '../denguehindi/denguehindi';
import { MalariahindiPage } from '../malariahindi/malariahindi';
import { MbdhindiPage } from '../mbdhindi/mbdhindi';
import { HealthcenterhindiPage } from '../healthcenterhindi/healthcenterhindi';
import { AchievementshindiPage } from '../achievementshindi/achievementshindi';
import { BoroughofficehindiPage } from '../boroughofficehindi/boroughofficehindi';
import { ContactushindiPage } from '../contactushindi/contactushindi';
import { AnnouncementhindiPage } from '../announcementhindi/announcementhindi';
import { SosmainengPage } from '../sosmaineng/sosmaineng';



/**
 * Generated class for the HomehindiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homehindi',
  templateUrl: 'homehindi.html',
})
export class HomehindiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomehindiPage');
  }

  navigate(param) {
    if(param=='denguehindi')
    this.navCtrl.push(DenguehindiPage);
    if(param=='malariahindi')
    this.navCtrl.push(MalariahindiPage);
    if(param=='mbdhindi')
    this.navCtrl.push(MbdhindiPage);
    if(param=='healthcenterhindi')
    this.navCtrl.push(HealthcenterhindiPage);
    if(param=='achievementshindi')
    this.navCtrl.push(AchievementshindiPage);
    if(param=='boroughofficehindi')
    this.navCtrl.push(BoroughofficehindiPage);
    if(param=='contactushindi')
    this.navCtrl.push(ContactushindiPage);
    if(param=='announcementhindi')
    this.navCtrl.push(AnnouncementhindiPage);
    if(param=='sosmaineng')
    this.navCtrl.push(SosmainengPage);
  }

}
