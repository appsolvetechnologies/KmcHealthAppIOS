import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomebengaliPage } from '../homebengali/homebengali';
import { HomehindiPage } from '../homehindi/homehindi';
import { HomeurduPage } from '../homeurdu/homeurdu';
import { AppUpdate } from '@ionic-native/app-update';
import { AppVersion } from '@ionic-native/app-version';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private appUpdate: AppUpdate,
    private appVersion: AppVersion) {
    const updateUrl = 'http://snaayou.com/apk/update.xml';
    this.appUpdate.checkAppUpdate(updateUrl);
 
/*
this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();
*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  navigate(param) {
    if(param=='home')
    this.navCtrl.push(HomePage);
    if(param=='homebengali')
    this.navCtrl.push(HomebengaliPage);
    if(param=='homehindi')
    this.navCtrl.push(HomehindiPage);
    if(param=='homeurdu')
    this.navCtrl.push(HomeurduPage);
    
  }

}
