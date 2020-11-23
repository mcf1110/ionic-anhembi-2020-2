import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetAlbumsResult } from '../types/getAlbumsResult';
import { SearchArtistsResult } from '../types/searchArtistsResult';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public searchArtists(searchTerm: string) {
    const url = `//musicbrainz.org/ws/2/artist/?query=${searchTerm}&fmt=json`;
    return this.http.get(url).toPromise() as Promise<SearchArtistsResult>;
  }

  public getAlbums(id: string) {
    const url = `//musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`;
    return this.http.get(url).toPromise() as Promise<GetAlbumsResult>;

  }
}
