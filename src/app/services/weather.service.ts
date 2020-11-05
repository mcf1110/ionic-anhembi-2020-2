import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityResult, WeatherResult } from './weather.types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public searchCity(query: string) {
    const url = `https://www.metaweather.com/api/location/search/?query=${query}`;
    return this.http.get(url).toPromise() as Promise<CityResult[]>;
  }

  public getWeather(id: number) {
    const url = `https://www.metaweather.com/api/location/${id}`;
    return this.http.get(url).toPromise() as Promise<WeatherResult>;
  }
}
