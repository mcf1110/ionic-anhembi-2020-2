import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CityService } from '../services/city.service';
import { CityResult } from '../services/metaweather.types';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public query = '';
  public suggestions: CityResult[] = [];

  constructor(
    private cityService: CityService,
    private navCtrl: NavController,
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
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

  public async search() {
    this.suggestions = await this.weatherService.search(this.query);
  }

}
