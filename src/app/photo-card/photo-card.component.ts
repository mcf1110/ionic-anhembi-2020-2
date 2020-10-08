import { Component, Input, OnInit } from '@angular/core';


export interface Photo {
  id: number;
  liked: boolean;
  commentCount: number;
  place: string;
  url: string;
  description: string;
  user: {
    name: string;
    id: number;
  };
};

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
