import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/interface/ILocation.interface';
import { IParamsHttp } from 'src/app/interface/IParamsHttp.interface';
//  services
import { LocationService } from 'src/app/services/location.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  inputValue = '';
  credits = 'empty';
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

  public locationHandler(params: Partial<IParamsHttp>) {
    this.locationSvc.getLocation(params)
      .subscribe(res => {
        this.locationSvc.updateLocation(res)
        console.log(res);
      })
  }
}
