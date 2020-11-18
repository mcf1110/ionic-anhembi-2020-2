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
  public result: ArtistResult = null;
  public isLoading = false;
  constructor(private musicService: MusicService) { }

  public async makeSearch() {
    if (this.search.length < 2) {
      return;
    }
    this.isLoading = true;
    this.result = await this.musicService.searchArtist(this.search);
    this.isLoading = false;
  }

}
