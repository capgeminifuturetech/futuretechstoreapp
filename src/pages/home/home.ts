import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  lng: any;
  distance: any;
  distancekm: any;
  
  raghuleelaFutureTechStore = { lat: 19.0636, lng: 72.9971 };
  nerulFutureTechStore = { lat: 19.033, lng: 73.0297 };
  rcityFutureTechStore = { lat: 19.01441, lng: 72.84794 };
  nashikFutureTechStore = { lat: 19.9975, lng: 73.7898 };

  constructor(public navCtrl: NavController,public geo: Geolocation,
    public plateform: Platform) {
      this.geo
      .getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;

        this.distance = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(this.lat, this.lng),
          new google.maps.LatLng(
            this.raghuleelaFutureTechStore.lat,
            this.raghuleelaFutureTechStore.lng
          )
        );

        let watch = this.geo.watchPosition();
        watch.subscribe(data => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
          console.log(resp.coords.longitude + " " + resp.coords.latitude);
        });

        //Mile to KM : distance/ 0.62137
        //Neter to KM : distance/ 1000
        this.distancekm =
          Math.round(this.distance / 1000 * Math.pow(10, 2)) / Math.pow(10, 2);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

}
