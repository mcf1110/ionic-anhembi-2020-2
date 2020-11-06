import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityResult, ForecastResult } from './metaweather.types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public search(query: string) {
    const url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    return this.http.get(url).toPromise() as Promise<CityResult[]>;
  }

  public findByLocation(lat: number, long: number) {
    const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`;
    return this.http.get(url).toPromise() as Promise<CityResult[]>;
  }

  public forecast(id: number) {
    const url = `https://www.metaweather.com/api/location/${id}`;
    return this.http.get(url).toPromise() as Promise<ForecastResult>;
  }
}
