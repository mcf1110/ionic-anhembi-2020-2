import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public photo: Photo;

  constructor(private route: ActivatedRoute, private photosService: PhotosService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photo = this.photosService.findPhoto(id);
  }

}
