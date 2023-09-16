import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/interface/ILocation.interface';
//  services
import { LocationService } from 'src/app/services/location.service';
import { MapsService } from 'src/app/services/maps.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  inputValue = '';
  locationData!: Partial<ILocation>
  locationSub!: Subscription

  constructor(
    private locationSvc: LocationService,
    private mapSvc: MapsService
    ){}

  ngOnInit(): void {
    this.locationSub = this.locationSvc.getLocationObservable().subscribe({
      next: (res) => this.locationData = res,
      error: (err: HttpErrorResponse) => console.error(`Error al suscribirse: ${err.message}`),
      complete: () => console.log('SearchBar suscribe')
    })
  }

  public locationHandler(params: string) {
    this.locationSvc.getLocationApi(params.trim())
      .subscribe(res => {
        this.mapSvc.updateMarker(res)
        this.locationSvc.updateLocation(res)
      })
  }
}
