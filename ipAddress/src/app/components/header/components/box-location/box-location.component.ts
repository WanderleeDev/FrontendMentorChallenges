import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//  services
import { LocationService } from 'src/app/services/location.service';
//  interface
import { ILocation } from 'src/app/interface/ILocation.interface';

@Component({
  selector: 'app-box-location',
  templateUrl: './box-location.component.html',
  styleUrls: ['./box-location.component.scss']
})
export class BoxLocationComponent implements OnInit {
  locationData?: Partial<ILocation>
  locationSub!: Subscription

  constructor( private locationSvc: LocationService ){}
  ngOnInit(): void {
    this.locationSub = this.locationSvc.getLocationObservable().subscribe({
      next: (res) => this.locationData = res,
      error: (err: HttpErrorResponse) => console.error(`Error al suscribirse: ${err.message}`),
      complete: () => console.log('SearchBar suscribe')
    })
  }
}
