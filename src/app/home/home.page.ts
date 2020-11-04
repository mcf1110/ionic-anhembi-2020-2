import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cities = this.cityService.all();

  constructor(private cityService: CityService, private alertController: AlertController) { }

  public async remove(id: number) {
    const a = await this.alertController.create({
      header: 'Deseja mesmo remover a cidade?',
      buttons: [
        'Não, me enganei',
        {
          text: 'Remover',
          handler: () => this.cityService.remove(id)
        }
      ]
    });
    a.present();
  }

}
