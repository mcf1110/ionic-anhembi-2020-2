import { Component, OnInit } from '@angular/core';
import { MusicService, Song } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public songs: Song[];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.songs = this.musicService.allSongs();
  }

}
