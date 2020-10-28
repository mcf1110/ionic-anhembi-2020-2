import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ReleaseResult } from '../types/release.result';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public result: ReleaseResult;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('artistId');
    this.result = await this.musicService.getReleases(id);
  }

}
