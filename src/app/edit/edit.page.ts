import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MusicService, Song } from '../services/music.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public song: Song;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.song = this.musicService.findSong(id);
  }

  public save() {
    this.musicService.update(this.song);
    this.navCtrl.back();
  }

}
