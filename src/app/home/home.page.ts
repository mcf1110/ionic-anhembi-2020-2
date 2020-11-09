import { Component } from '@angular/core';
import { CameraResultType, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photo: string;

  constructor() { }

  public async getPhoto() {
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
    });
    this.photo = photo.dataUrl;
  }
}
