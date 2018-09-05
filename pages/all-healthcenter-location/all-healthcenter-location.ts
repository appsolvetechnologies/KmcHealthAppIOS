import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
//import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { SingleLocationMapPage } from '../single-location-map/single-location-map';
import { AllLocationMapPage } from '../all-location-map/all-location-map';
import { UserInfoPage } from '../user-info/user-info';

/**
 * Generated class for the AllHealthcenterLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-healthcenter-location',
  templateUrl: 'all-healthcenter-location.html',
})
export class AllHealthcenterLocationPage {

  museumList = [];
  filteredMuseum = [];
  isfiltered: boolean ;

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isfiltered = false;
    this.http.get('assets/data/kmc.json')
    .map(res => res.json())
    .subscribe(data => {
        this.museumList = data.museums;
      },
      err => console.log("error is "+err), // error
      () => console.log('read museum data Complete '+ this.museumList) // complete
    );
  }

  searchMaps(event) {
    if(event.target.value.length > 2) {
      var filteredJson = this.museumList.filter(function (row) {
        if(row.state.indexOf(event.target.value) != -1) {
          return true
        } else {
          return false;
        }
      });
      this.isfiltered = true;
      this.filteredMuseum = filteredJson;
    }
  }

  itemTapped(event, museum) {
     this.navCtrl.push(SingleLocationMapPage, {
       museum: museum
     });
  }

  allMuseumMap(){
    this.navCtrl.push(AllLocationMapPage, {
       museumList: this.museumList
    });
  }

  UserData(){
    alert("pushing data page");
    this.navCtrl.push(UserInfoPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AllHealthcenterLocationPage');
  }

}
