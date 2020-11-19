import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ArtistResult } from '../types/artist.result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public search = '';
  public results: ArtistResult = null;
  public isLoaded = true;

  constructor(private musicService: MusicService) { }

  public async makeSearch() {
    if (this.search.length == 0) {
      return;
    }
    this.isLoaded = false;
    this.results = await this.musicService.searchArtist(this.search);
    this.isLoaded = true;
  }

}
