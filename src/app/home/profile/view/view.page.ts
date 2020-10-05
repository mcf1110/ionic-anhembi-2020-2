import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  public photoId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.photoId = +this.route.snapshot.paramMap.get('id');
  }

}
