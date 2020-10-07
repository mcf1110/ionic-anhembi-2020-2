import { Component, Input, OnInit } from '@angular/core';

export interface Photo {
  id: number;
  liked: boolean;
  description: string;
  comment_count: number;
  place: string;
  user: {
    id: number;
    name: string;
  };
}

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {

  @Input() public photo: Photo;

  constructor() { }

  ngOnInit() { }

}
