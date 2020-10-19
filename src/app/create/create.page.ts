import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public song: Song = this.songService.empty();

  constructor(private songService: SongService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public save() {
    this.songService.create(this.song);
    this.navCtrl.back();
  }

}
