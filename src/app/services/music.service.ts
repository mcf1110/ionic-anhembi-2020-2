import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistResult } from '../types/artist.result';
import { ReleaseResult } from '../types/release.result';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public async searchArtist(search: string) {
    const url = "//musicbrainz.org/ws/2/artist/?query=" + search + "&fmt=json"
    return await this.http.get(url).toPromise() as ArtistResult;
  }

  public async getReleases(id: string) {
    const url = `//musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
    return await this.http.get(url).toPromise() as ReleaseResult;
  }
}
