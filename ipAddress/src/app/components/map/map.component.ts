import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { MapsService } from 'src/app/services/maps.service';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/interface/ILocation.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  locateData!: Partial<ILocation>;
  locateSubscription!:Subscription;

  constructor(
    private locationSvc: LocationService,
    private mapSvc: MapsService
    ){}

  ngOnInit(): void {
    this.locateSubscription = this.locationSvc.getLocationObservable().subscribe(res =>{
      this.locateData = res,
      this.mapSvc.GeolocationOnTheMap(this.locateData)
    })
  }

  clip(){
    console.log('click');
  }
}
