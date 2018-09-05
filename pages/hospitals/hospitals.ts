import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
//import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { SingleHospitalPage } from '../singlehospital/singlehospital';
import { AllLocationMapPage } from '../all-location-map/all-location-map';
import {HospitalsPage} from '../hospitals/hospitals';

/**
 * Generated class for the HospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospitals',
  templateUrl: 'hospitals.html',
})
export class HospitalsPage {

  museumList = [];
  filteredMuseum = [];
  isfiltered: boolean ;

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isfiltered = false;
    this.http.get('assets/data/hospitals.json')
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
     this.navCtrl.push(SingleHospitalPage, {
       museum: museum
     });
  }

  allMuseumMap(){
    this.navCtrl.push(AllLocationMapPage, {
       museumList: this.museumList
    });
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllHealthcenterLocationPage');
  }

}
