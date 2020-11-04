import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface City {
  name: string;
  id: number;
  location: {
    latitude: number;
    longitude: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [];

  constructor(private storage: Storage) {
    this.storage.get('cities').then(v => this.cities.push(...v));
  }

  public all() {
    return this.cities;
  }

  public create(city: City) {
    const maxId = Math.max(...this.cities.map(c => c.id));
    this.cities.push({ ...city, id: maxId + 1 });
    this.storage.set('cities', this.cities);
  }

  public remove(id: number) {
    const idx = this.cities.findIndex(c => c.id === id);
    this.cities.splice(idx, 1);
    this.storage.set('cities', this.cities);
  }

  public find(id: number) {
    return this.cities.find(c => c.id === id);
  }
}
