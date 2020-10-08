import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/photo-card/photo-card.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public id: number;
  public photo: Photo;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photo = {
      id,
      liked: false,
      commentCount: 12,
      place: 'Santos, SP',
      url: `https://picsum.photos/id/${id}/500`,
      description: 'Lorem ipsum',
      user: {
        name: 'Bruno filho do diniz',
        id: 50
      }
    }
  }

}
