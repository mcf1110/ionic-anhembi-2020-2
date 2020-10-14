import { Injectable } from '@angular/core';

export interface Song {
  id: number;
  name: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private songs: Song[] = [
    { id: 0, name: 'Never gonna give you up', favorite: false },
    { id: 1, name: 'Let it be', favorite: true },
  ];

  public allSongs() {
    return this.songs;
  }

  public findSong(id: number) {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(updatedSong: Song) {
    const idx = this.songs.findIndex(s => s.id == updatedSong.id);
    this.songs[idx] = updatedSong;
  }
}
