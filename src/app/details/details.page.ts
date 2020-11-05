import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService, City } from '../services/city.service';
import { WeatherService } from '../services/weather.service';
import { WeatherResult } from '../services/weather.types';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public city: City;
  public forecast: WeatherResult;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private weatherService: WeatherService
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.city = this.cityService.find(id);
    this.forecast = await this.weatherService.getWeather(id);
  }

}
