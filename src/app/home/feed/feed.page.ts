import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/photo-card/photo-card.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[] = [
    {
      id: 3,
      liked: false,
      commentCount: 12,
      place: 'Santos, SP',
      url: 'https://lance.com.br/files/article_main/uploads/2020/06/27/5ef775a3b0522.jpeg',
      description: 'Lorem ipsum',
      user: {
        name: 'Bruno filho do diniz',
        id: 50
      }
    },
    {
      id: 50,
      liked: false,
      commentCount: 200,
      place: 'ZL, SP',
      url: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1008%2Fr757755_1000x400_5%2D2.jpg&w=768&h=307&scale=crop&cquality=80&location=origin&format=jpg',
      description: 'Timaooo',
      user: {
        name: 'Lucas',
        id: 4
      }
    },
    {
      id: 3,
      liked: false,
      commentCount: 12,
      place: 'Santos, SP',
      url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
      description: 'Lorem ipsum',
      user: {
        name: 'Bruno',
        id: 18
      }
    },
    {
      id: 8,
      liked: false,
      commentCount: 12,
      place: 'Sao Paulo, SP',
      url: 'https://images.daznservices.com/di/library/GOAL/0/a2/luiz-adriano-palmeiras-guarani-libertadores-10-03-2020_1gnekjto2rfri1mrholyrgs0qd.jpg?t=-939259984&…',
      description: 'Teste',
      user: {
        name: 'Luiz',
        id: 7
      }
    },
    {
      id: 3,
      liked: false,
      commentCount: 15,
      place: 'Summoners Rift',
      url: 'http://uploads.spiritfanfiction.com/fanfics/capitulos/201904/amantes-no-placidio--rakan-e-xayah-16357455-240420192019.png',
      description: 'Melhor ADC #TBT',
      user: {
        name: 'Xayah',
        id: 25
      }
    },
    {
      id: 1,
      liked: true,
      commentCount: 12,
      place: 'Santos, SP',
      url: 'https://picsum.photos/id/237/500',
      description: 'Lorem ipsum',
      user: {
        name: 'Matheus',
        id: 15
      }
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
