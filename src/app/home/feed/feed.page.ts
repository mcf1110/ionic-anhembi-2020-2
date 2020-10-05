import { Component, OnInit } from '@angular/core';

type Photo = {
  id: number;
  liked: boolean;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[] = [
    {id: 123, liked: false},
    {id: 124, liked: false},
    {id: 125, liked: false},
    {id: 126, liked: false},
    {id: 127, liked: false},
    {id: 128, liked: false},
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleLike(p: Photo){
    p.liked = !p.liked;
  }

}
