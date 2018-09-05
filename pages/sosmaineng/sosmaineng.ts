import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, Platform, ToastController  } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the SosmainengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sosmaineng',
  templateUrl: 'sosmaineng.html',
})
export class SosmainengPage {
  text = {
    "number": "", 
    "message": "",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,
    private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosmainengPage');
  }

  navigate(param) {
    if(param=='userInfo')
    this.navCtrl.push(UserInfoPage);    
  }

  sendTextMessage() {
    // create the random number and send to SMS as well as server for verification
    var r = Math.round(Math.random()*100000);

    var options:{
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send('9830270869', this.text.message, options).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }

}
