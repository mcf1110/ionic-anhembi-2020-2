import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private cityService: CityService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public create() {
    this.cityService.create({
      id: 0,
      name: 'Recife',
      location: {
        latitude: 0,
        longitude: 0
      }
    });
    this.navCtrl.back();
  }

}
