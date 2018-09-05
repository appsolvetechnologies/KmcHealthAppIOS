import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { Museum } from '../../models/museum';

/**
 * Generated class for the SingleLocationMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()

@Component({
  selector: 'page-single-location-map',
  templateUrl: 'single-location-map.html',
})
export class SingleLocationMapPage {

  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  museum = {} as Museum;
  options : GeolocationOptions;
  currentPos : Geoposition;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
    this.museum = navParams.get('museum');
  }

  ionViewDidLoad(){
    this.displayGoogleMap();
    this.getUserPosition();
  }


  displayGoogleMap() {
    console.log("this kmc office latitude : " + this.museum.latitude);
    let latLng = new google.maps.LatLng(this.museum.latitude, this.museum.longitude);
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
    this.addInfoWindow(marker, this.museum.name + this.museum.address1);
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
    let latLng = new google.maps.LatLng(this.museum.latitude, this.museum.longitude);
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
