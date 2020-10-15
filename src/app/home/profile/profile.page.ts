import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public gridSize = 4;

  public photos: Photo[];

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photos = this.photoService.allPhotos();
  }

}
