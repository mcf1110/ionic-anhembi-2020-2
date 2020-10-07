import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/components/photo-card/photo-card.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public photo: Photo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.photo = {
      id: +this.route.snapshot.paramMap.get('id'),
      liked: false,
      description: 'No alto daquele cume plantei uma roseira',
      comment_count: 44,
      place: 'Pindamonhangaba',
      user: {
        id: 50,
        name: 'Douglas'
      }
    };
  }

}
