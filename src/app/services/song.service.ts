import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage'

export interface Song {
  id: number;
  name: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [];

  constructor(private storage: Storage) {
    this.loadData();
  }

  private async loadData() {
    const loaded = await this.storage.get('songs') || [];
    this.songs.push(...loaded);
  }

  private saveData() {
    this.storage.set('songs', this.songs);
  }

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
    this.saveData();
  }

  public create(song: Song) {
    const maxId = this.songs.length ?
      Math.max(...this.songs.map(s => s.id))
      : 0;
    this.songs.push({ ...song, id: maxId + 1 });
    this.saveData();
  }
}
