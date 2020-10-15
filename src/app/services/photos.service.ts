import { Injectable } from '@angular/core';

export interface Photos {
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

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private photos: Photos[] = [{
    id: 2,
    liked: false,
    description: 'No alto daquele cume plantei uma roseira',
    comment_count: 44,
    place: 'Pindamonhangaba',
    user: {
      id: 50,
      name: 'Douglas'
    }
  }, {
    id: 20,
    liked: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    comment_count: 30,
    place: 'São Paulo, SP',
    user: {
      id: 23,
      name: 'Emerson Silveira'
    }
  }, {
    id: 92,
    liked: true,
    description: 'Carpe Diem',
    comment_count: 3990,
    place: 'São Paulo, SP',
    user: {
      id: 45,
      name: 'Matheus'
    }
  }, {
    id: 23,
    liked: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    comment_count: 80,
    place: 'New York',
    user: {
      id: 13,
      name: 'Hélio'
    }
  },
  {
    id: 1,
    liked: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    comment_count: 42,
    place: 'Santos, SP',
    user: {
      id: 5,
      name: 'Prof. Matheus'
    }
  },
  ];

  constructor() { }

  public allPhotos() {
    return this.photos;
  }

  public findPhoto(id: number) {
    return this.photos.find(p => p.id === id);
  }
}
