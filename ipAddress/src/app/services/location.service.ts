import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
//  interface
import { ILocation } from '../interface/ILocation.interface';
import { IParamsHttp } from '../interface/IParamsHttp.interface';


@Injectable({
  providedIn: 'root'
})
export class LocationService   {
  private baseApi = 'https://geo.ipify.org/api/v2/country,city'
  private apiKey = 'at_N409z98SzQepq03zeo6jNVxO4y90g';
  private locationData = new BehaviorSubject<Partial<ILocation>>({})

  constructor(private http: HttpClient) {
    this.getLocation({}).subscribe({
      next: (res) => this.locationData.next(res),
      error: (err: HttpErrorResponse) => {
        console.error(`Ha ocurrido un error: ${err.message}`)
      },
      complete: () => console.log('Data obtenida')
    })
  }

  public getLocation( newParams: Partial<IParamsHttp> = {} ): Observable<ILocation> {
    let params = new HttpParams();
    params = params.set('apiKey', this.apiKey)

    for (const key in newParams ) {
      if (newParams[key] !== undefined && newParams.hasOwnProperty(key)) {
        params = params.set(key , newParams[key]!.toString())
      }
    }
    this.locationData.next
    return this.http.get<ILocation>(this.baseApi, { params })
  }

  public getLocationObservable(): Observable<Partial<ILocation>> {
    return this.locationData.asObservable()
  }

  public updateLocation(newLocation: ILocation) {
    this.locationData.next(newLocation)
  }
}
