import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService, City } from '../services/city.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public city: City;

  constructor(private route: ActivatedRoute, private cityService: CityService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.city = this.cityService.find(id);
  }

}
