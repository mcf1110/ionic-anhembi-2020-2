import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public song: Song;

  constructor(
    private songService: SongService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.song = this.songService.find(id);
  }

  save() {
    this.songService.update(this.song);
    this.navCtrl.back();
  }

}
