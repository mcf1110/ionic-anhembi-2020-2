import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T extends { id: number }> {

  private items: T[] = [];
  protected abstract getKey(): string;

  constructor(private storage: Storage) {
    this.storage.get(this.getKey()).then(loaded => {
      if (loaded) {
        this.items.push(...loaded);
      }
    })
  }

  public all(): T[] {
    return this.items;
  }

  public remove(id: number) {
    const idx = this.items.findIndex(i => i.id === id);
    this.items.splice(idx, 1);
    this.storage.set(this.getKey(), this.items);
  }

  public find(id: number) {
    return this.items.find(i => i.id === id);
  }

  public create(item: T) {
    this.items.push({ ...item });
    this.storage.set(this.getKey(), this.items);
  }
}
