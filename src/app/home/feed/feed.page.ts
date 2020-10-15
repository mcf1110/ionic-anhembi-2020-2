import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[]

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photos = this.photoService.allPhotos();
  }

}
