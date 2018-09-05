import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
//import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { SingleLocationBoroughMapPage } from '../single-location-borough-map/single-location-borough-map';

/**
 * Generated class for the BoroughofficeengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boroughofficeeng',
  templateUrl: 'boroughofficeeng.html',
})
export class BoroughofficeengPage {
  boroughList = [];
  filteredborough = [];
  isfiltered: boolean ;

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isfiltered = false;
    this.http.get('assets/data/borough.json')
    .map(res => res.json())
    .subscribe(data => {
        this.boroughList = data.borough;
      },
      err =>alert("error is "+err), // error
      () => console.log('read borough data Complete '+ this.boroughList) // complete
    );
  }


  itemTapped(event, borough) {
    //alert(borough.borough);
     this.navCtrl.push(SingleLocationBoroughMapPage, {
       borough: borough
     });
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoroughOfficePage');
  }

}
