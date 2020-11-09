import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music.service';
import { GetAlbumsResult } from '../types/getAlbumsResult';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public results: GetAlbumsResult = null;

  constructor(private musicService: MusicService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.results = await this.musicService.getAlbums(id);
  }

}
