import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SMS } from '@ionic-native/sms';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
/**
 * Generated class for the SosinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-sosinfo',
  templateUrl: 'sosinfo.html',
})
export class SosinfoPage {
  first:string;
  options : GeolocationOptions;
  currentPos : Geoposition;
  items = [];
  phno='';
  phno1='';
  phno2='';
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,
    private sms: SMS,public geolocation: Geolocation, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosinfoPage');
  }

  getUserPosition(){
    alert("getting position");
    this.options = {
      enableHighAccuracy : true
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
        this.currentPos = pos;     
  
        alert(pos.coords.latitude.toString());

        this.sendSMS(pos.coords.latitude,pos.coords.longitude);
  
    },(err : PositionError)=>{
        console.log("error : " + err.message);
        alert("error : " + err.message);
    ;
    })
  }

  save(){
    this.getUserPosition();
    alert(this.first);
  }

  /*
  */
sendSMS(lat,long)
{

this.sqlite.create({
name: 'data.db',
location: 'default'
})
.then((db: SQLiteObject) => {

//data retrieve section

db.executeSql('select * from usernameList', {}).then((data) => {

alert(JSON.stringify(data));

//alert(data.rows.length);
//alert(data.rows.item(5).name);
this.items = [];
if(data.rows.length > 0) {
//for(var i = 0; i < data.rows.length; i++) {
for(var i = 0; i < 1; i++) {
//alert(data.rows.item(i).name);�
this.items.push({name: data.rows.item(i).name, emailid: data.rows.item(i).email,
  phno: data.rows.item(i).phno, phno1: data.rows.item(i).phno1,
  phno2: data.rows.item(i).phno2});
 }
 
 var msg:string;
 msg="TEST: PLEASE IGNORE. I am contacting you in emergency. My location : " + lat + ", " + long  + ". I am facing : " + this.first   

  // send actual msg
 
    var options:{
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    
    this.sms.send(data.rows.item(0).phno1, msg, options).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Message sent successfully",
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

    this.sms.send(data.rows.item(0).phno2, msg, options).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      alert("msg not sent to second no ");
    });
  //end
 

}

}, (err) => {
alert('Unable to execute sql: '+JSON.stringify(err));
});
})
.catch(e => alert(JSON.stringify(e)));
//alert(this.username);
}
  /*
  */  
}
