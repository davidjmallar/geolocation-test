import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  onChange: EventEmitter<Position> = new EventEmitter<Position>();
  onFirst: EventEmitter<Position> = new EventEmitter<Position>();
  position: Position;

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        if (!this.position) {
          console.log(position);
          this.position = position;
          this.onFirst.emit(position);
        } else {
          this.position = position;
        }
        this.onChange.emit(this.position);
      }, error => {
        console.error(error);
      }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 30000
      });
    }
  }
}
