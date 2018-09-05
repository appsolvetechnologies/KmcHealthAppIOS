import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenguebngliPage } from '../denguebngli/denguebngli';
import { MalariabngliPage } from '../malariabngli/malariabngli';
import { MbdbngliPage } from '../mbdbngli/mbdbngli';
import { HealthcenterbngliPage } from '../healthcenterbngli/healthcenterbngli';
import { AchievementsbngliPage } from '../achievementsbngli/achievementsbngli';
import { BoroughofficebngliPage } from '../boroughofficebngli/boroughofficebngli';
import { ContactusbngliPage } from '../contactusbngli/contactusbngli';
import { AnnouncementbngliPage } from '../announcementbngli/announcementbngli';
import { SosmainengPage } from '../sosmaineng/sosmaineng';

/**
 * Generated class for the HomebengaliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homebengali',
  templateUrl: 'homebengali.html',
})
export class HomebengaliPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomebengaliPage');
  }

  navigate(param) {
    if(param=='denguebngli')
    this.navCtrl.push(DenguebngliPage);
    if(param=='malariabngli')
    this.navCtrl.push(MalariabngliPage);
    if(param=='mbdbngli')
    this.navCtrl.push(MbdbngliPage);
    if(param=='healthcenterbngli')
    this.navCtrl.push(HealthcenterbngliPage);
    if(param=='achievementsbngli')
    this.navCtrl.push(AchievementsbngliPage);
    if(param=='boroughofficebngli')
    this.navCtrl.push(BoroughofficebngliPage);
    if(param=='contactusbngli')
    this.navCtrl.push(ContactusbngliPage);
    if(param=='announcementbngli')
    this.navCtrl.push(AnnouncementbngliPage);
    if(param=='sosmaineng')
    this.navCtrl.push(SosmainengPage);
  }

}
