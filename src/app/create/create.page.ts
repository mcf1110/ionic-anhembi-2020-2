import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CityService } from '../services/city.service';
import { WeatherService } from '../services/weather.service';
import { CityResult } from '../services/weather.types';

import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public query = '';
  public results: CityResult[] = []

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public async getLocation() {
    const p = await Geolocation.getCurrentPosition();
    this.results = await this.weatherService.searchByLatLong(p.coords.latitude, p.coords.longitude);
  }

  public async search() {
    this.results = await this.weatherService.searchCity(this.query);
  }

  public create(cr: CityResult) {
    const [lat, long] = cr.latt_long.split(',');

    this.cityService.create({
      id: cr.woeid,
      name: cr.title,
      location: {
        latitude: +lat,
        longitude: +long
      }
    });
    this.navCtrl.back();
  }

}
