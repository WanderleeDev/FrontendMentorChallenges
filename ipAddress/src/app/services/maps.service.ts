import { Injectable } from '@angular/core';
import { ILocation } from '../interface/ILocation.interface';
import  {Map, tileLayer, marker, icon, Marker} from 'leaflet'


@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private backupRuns = { lat: 51.505, long: -0.09 };
  private map!: Map;
  private marker?: Marker
  private myIcon = icon({
    iconUrl: '../../assets/images/icon-location.svg',
    iconSize:[25, 30]
  })



  public GeolocationOnTheMap(target: Partial<ILocation>):void {
    const cordenadas: number[] = [
      target.location?.lat ?? this.backupRuns.lat,
      target.location?.lng ?? this.backupRuns.long
    ]
    this.map= new Map('map').setView([ cordenadas[0], cordenadas[1] ] , 13);

    // modelo de mapa
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    //marker
    this.marker = marker([ cordenadas[0], cordenadas[1] ], {icon: this.myIcon})
      .addTo(this.map)
      .bindPopup(`${target.location?.country},${target.location?.city}-${target.location?.region}`)
      .openPopup()

    //  auto centrado en referencia al marker
    this.map.fitBounds([
      [
        this.marker.getLatLng().lat,
        this.marker.getLatLng().lng
      ]
    ])
  }

  //  remueve el marker anterior y pone uno nuevo en la nueva ubicación
  public updateMarker(target: Partial<ILocation>){
      this.marker?.remove()
        //marker
        this.marker = marker([ target.location?.lat, target.location?.lng ] as [number, number], {icon: this.myIcon})
        .addTo(this.map)
        .bindPopup(
          `${target.location?.country},${target.location?.city}-${target.location?.region}`
          )
        .openPopup()

      //  auto centrado en referencia al marker
      this.map.fitBounds([
        [
          this.marker.getLatLng().lat,
          this.marker.getLatLng().lng
        ]
      ])
  }
}

// modelos de mapas leaflet
// https://leaflet-extras.github.io/leaflet-providers/preview/

