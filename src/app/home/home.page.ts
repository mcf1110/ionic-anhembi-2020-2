import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { SearchArtistsResult } from '../types/searchArtistsResult';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public search = '';
  public results: SearchArtistsResult = null;
  public isLoading = false;

  constructor(private musicService: MusicService) { }

  public async searchArtists() {
    this.isLoading = true;
    this.results = await this.musicService.searchArtists(this.search);
    this.isLoading = false;
  }

}
