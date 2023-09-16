import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//  interface
import { ILocation } from '../interface/ILocation.interface';


@Injectable({
  providedIn: 'root'
})
export class LocationService   {
  private baseApi = 'https://geo.ipify.org/api/v2/country,city'
  private apiKey = 'at_86ixnQqRT54vJifUKiNA2Gv2HGksa';
  private locationData = new Subject<Partial<ILocation>>()
  private regex = {
    ip: /^\b(?:\d{1,3}\.){3}\d{1,3}\b$/,
    domain: /^((http|https):\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/
  }

  constructor(private http: HttpClient) {
    this.getLocationApi().subscribe({
      next: (res) => this.locationData.next(res),
      error: (err: HttpErrorResponse) => {
        console.error(`Ha ocurrido un error: ${err.message}`)
      },
      complete: () => console.log('Data obtenida')
    })
  }

  public getLocationApi( newParams? :string ): Observable<ILocation> {
    let params = new HttpParams();
    params = params.set('apiKey', this.apiKey)

    if (newParams) {
    console.log(newParams);
      if(this.regex.ip.test(newParams)) {
        params = params.set('ipAddress', newParams)
      }
      if (this.regex.domain.test(newParams)) {
        params = params.set('domain', newParams)
      }
    }

    return this.http.get<ILocation>(this.baseApi, { params })
  }

  public getLocationObservable(): Observable<Partial<ILocation>> {
    return this.locationData.asObservable()
  }

  public updateLocation(newLocation: ILocation) {
    this.locationData.next(newLocation)
  }
}

/*  Opcional forma nativa de geolocalización
private getLocationNative() {
  navigator.geolocation.getCurrentPosition((position) => {
    return {
      lat: position.coords.latitude,
      log: position.coords.longitude
    }
  });
}

public getLocation() {
  if (navigator.geolocation) {
    return this.getLocationNative()
  } else {
    return this.getLocationApi()
  }
}
*/
