import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  public async getPhoto() {
    const connection = await Plugins.Network.getStatus();
    if (connection.connectionType === 'wifi') {
      console.log('Você está no wifi!');
    } else if (connection.connectionType === 'none') {
      console.log('Você está sem internet!');
    } else {
      console.log('Você está com um 3G ou algo do tipo!');
    }
  }

}
