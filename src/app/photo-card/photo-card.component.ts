import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {

  @Input() photoId: number;
  @Input() liked: boolean;

  @Output() likedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

}
