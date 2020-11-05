import { Component } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private cityService: CityService) { }
  public cities = this.cityService.all();

  public remove(id: number) {
    this.cityService.remove(id);
  }

}
