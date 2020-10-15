import { Injectable } from '@angular/core';

export interface Song {
  id: number;
  title: string;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [
    { id: 0, title: 'Never gonna give you up', favorite: true },
    { id: 1, title: 'Let it be', favorite: false },
  ];

  public allSongs(): Readonly<Array<Readonly<Song>>> {
    return this.songs;
  }

  public find(id: number): Song {
    return { ...this.songs.find(s => s.id === id) };
  }

  public update(updatedSong: Song): void {
    const songIndex = this.songs.findIndex(s => s.id === updatedSong.id);
    this.songs[songIndex] = updatedSong;
  }
}
