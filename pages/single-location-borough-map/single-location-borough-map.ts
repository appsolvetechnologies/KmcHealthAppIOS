import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { Borough } from '../../models/borough';

/**
 * Generated class for the SingleLocationMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()

@Component({
  selector: 'page-single-location-borough-map',
  templateUrl: 'single-location-borough-map.html',
})
export class SingleLocationBoroughMapPage {

  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  borough = {} as Borough;
  options : GeolocationOptions;
  currentPos : Geoposition;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
    this.borough = navParams.get('borough');
  }

  ionViewDidLoad(){
    this.displayGoogleMap();
    this.getUserPosition();
  }


  displayGoogleMap() {
    console.log("this kmc office position : " + this.borough.latitude);
    let latLng = new google.maps.LatLng(this.borough.latitude, this.borough.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.borough.name + this.borough.address1);
  }

  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
        this.currentPos = pos;     
  
        console.log(pos);
        this.startNavigating(pos.coords.latitude,pos.coords.longitude);
  
    },(err : PositionError)=>{
        console.log("error : " + err.message);
        alert("error : " + err.message);
    ;
    })
  }
 
  
  startNavigating(lat,long){
 
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let latLng = new google.maps.LatLng(this.borough.latitude, this.borough.longitude);
    let cpos = new google.maps.LatLng(lat,long);
    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: cpos,
        destination: latLng,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });

}

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}
