import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

export interface City {
  id: number;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CityService extends AbstractService<City> {

  protected getKey(): string {
    return 'cities';
  }

}
