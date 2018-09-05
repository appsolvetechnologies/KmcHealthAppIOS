import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DengueengPage } from '../dengueeng/dengueeng';
import { MalariaengPage } from '../malariaeng/malariaeng';
import { MbdengPage } from '../mbdeng/mbdeng';
import { HealthcenterengPage } from '../healthcentereng/healthcentereng';
import { AchievementsengPage } from '../achievementseng/achievementseng';
import { BoroughofficeengPage } from '../boroughofficeeng/boroughofficeeng';
import { ContactusengPage } from '../contactuseng/contactuseng';
import { TestbenglipagePage } from '../testbenglipage/testbenglipage';
import { AnnouncementengPage } from '../announcementeng/announcementeng';
import { SosmainengPage } from '../sosmaineng/sosmaineng';
import { AllHealthcenterLocationPage } from '../all-healthcenter-location/all-healthcenter-location';
import { UserInfoPage } from '../user-info/user-info';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate(param) {
    if(param=='dengueeng')
    this.navCtrl.push(DengueengPage);
    if(param=='malariaeng')
    this.navCtrl.push(MalariaengPage);
    if(param=='mbdeng')
    this.navCtrl.push(MbdengPage);
    if(param=='healthcentereng')
    this.navCtrl.push(AllHealthcenterLocationPage);
    //this.navCtrl.push(HealthcenterengPage);
    if(param=='achievementseng')
    this.navCtrl.push(AchievementsengPage);
    if(param=='boroughofficeeng')
    //alert("pushing data page");   
    this.navCtrl.push(BoroughofficeengPage);
    //this.navCtrl.push(AllHealthcenterLocationPage);
    if(param=='contactuseng')
    this.navCtrl.push(ContactusengPage);
    if(param=='testbenglipage')
    this.navCtrl.push(TestbenglipagePage);
    if(param=='announcementeng')
    this.navCtrl.push(AnnouncementengPage);
    if(param=='sosmaineng')
    //this.navCtrl.push(SosmainengPage);
    this.navCtrl.push(UserInfoPage);
    if(param=='testbenglipage')
    this.navCtrl.push(TestbenglipagePage);
  }

}
