import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Map, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/interface/ILocation.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  locateData!: Partial<ILocation>;
  locateSubscription!:Subscription;
  backupRuns = { lat: 51.505, long: -0.09 };


  constructor( private locationSvc: LocationService ){
    this.locateSubscription = this.locationSvc.getLocationObservable().subscribe({
    next: (res) => {
      this.locateData = res,
      console.log(this.locateData)
    },
      error: (err: HttpErrorResponse) => {
        console.error(err.message)
      },
      complete: () => {
        console.log('map suscribe')
        console.log(this.locateData);
      }
    })
  }

  ngAfterViewInit(): void {
    this.GeolocationOnTheMap()
  }

  private GeolocationOnTheMap():void {
    const map = new Map('map').setView([
      this.locateData.location?.lat ?? this.backupRuns.lat,
      this.locateData.location?.lng ?? this.backupRuns.long
    ], 12);

    // modelo de mapa
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(this.locateData);
  }


}


// modelos de mapas leaflet
// https://leaflet-extras.github.io/leaflet-providers/preview/
