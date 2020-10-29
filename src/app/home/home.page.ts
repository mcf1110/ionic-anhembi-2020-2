import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private network: Network) { }

  public showConnection() {
    if (this.network.type === this.network.Connection.WIFI) {
      console.log('Você está no Wi-Fi!');
    } else if (this.network.type === this.network.Connection.NONE) {
      console.log('Você está desconectado!');
    } else {
      console.log('Você está em uma rede móvel')
    }
  }

}
