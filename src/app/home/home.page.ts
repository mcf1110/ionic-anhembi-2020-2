import { Component } from '@angular/core';

import { CameraResultType, CameraSource, Plugins } from '@capacitor/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photo: string;

  constructor() {
  }

  public async getPhoto() {
    this.photo = (await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })).dataUrl;
  }

}
