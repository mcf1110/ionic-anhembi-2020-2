import { Injectable } from '@angular/core';

export interface Song {
  id: number;
  name: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [
    { id: 1, name: 'Never gonna give you up', favorite: true },
    { id: 2, name: 'Let it be', favorite: false }
  ];

  public empty(): Song {
    return {
      id: 0,
      name: '',
      favorite: false
    };
  }

  public all() {
    return this.songs;
  }

  public find(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(song: Song) {
    const idx = this.songs.findIndex(s => s.id === song.id);
    this.songs[idx] = { ...song };
  }

  public create(song: Song) {
    const maxId = Math.max(...this.songs.map(s => s.id))
    this.songs.push({ ...song, id: maxId + 1 });
  }
}
