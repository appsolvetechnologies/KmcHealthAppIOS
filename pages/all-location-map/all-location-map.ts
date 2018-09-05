import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
 

/**
 * Generated class for the AllLocationMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-all-location-map',
  templateUrl: 'all-location-map.html',
})
export class AllLocationMapPage {

  options : GeolocationOptions;
currentPos : Geoposition;
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  museumList = [];
  latvalue:any;
  longvalue:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public http: Http) {
    this.museumList = navParams.get('museumList');
    console.log(this.museumList);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers(); 
    this.getUserPosition();
  }

  

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);  
      
    var museumMarker = new google.maps.Marker({
      position: this.map.getCenter(), 
      title: "this is your current location",     
        map: this.map,
        animation: google.maps.Animation.DROP,
        center:latLng       
    });
    museumMarker.setMap(this.map);
  
  }

  addMarker(){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });
  
    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });
  }

  getUserPosition(){
    this.options = {
    enableHighAccuracy : true
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
        this.currentPos = pos;     
  
        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);
  
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
  }

  displayGoogleMap() {

    this.options = {
      enableHighAccuracy : true
      };
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
    
          this.currentPos = pos;     
    
          console.log(pos);
         // this.addMap(pos.coords.latitude,pos.coords.longitude);
         let latLng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
         this.latvalue=pos.coords.latitude;
         this.longvalue=pos.coords.longitude;
        
        console.log("current position long lat " + pos.coords.latitude + pos.coords.longitude);
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
  
   let latLng = new google.maps.LatLng(22.5079311, 88.3215392);
  //alert(this.getUserPosition());
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }
  
  getMarkers() {
    for (let _i = 0; _i < this.museumList.length; _i++) {
      if(_i > 0 )
       this.addMarkersToMap(this.museumList[_i]);
    }
  }
  
  addMarkersToMap(museum) {
      var position = new google.maps.LatLng(museum.latitude, museum.longitude);
      var museumMarker = new google.maps.Marker({position: position, title: museum.name});
      museumMarker.setMap(this.map);
      console.log(" position added : " + museum.latitude + ' ' + museum.longitude);
  }
    
     toggleBounce(museumMarker) {
      if (museumMarker.getAnimation() !== null) {
        museumMarker.setAnimation(null);
      } else {
        museumMarker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  

}
