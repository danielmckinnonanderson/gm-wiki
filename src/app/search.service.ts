import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NPC } from 'src/data/data.types';

const npcs = require('../data/npcs.json') as NPC[];

export type NoResults = null;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public readonly results = new BehaviorSubject<any[] | NoResults>(null);

  constructor() { }

  onQueryChanged(query: string): void {
    if (query === "") {
      this.results.next(null as NoResults);
      return;
    }

    const found = this.search(query);
    this.results.next(found);
  }

  private search(query: string): NPC[] {
    const found: NPC[] = npcs.filter(value => {
      return value.name.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    });

    return found;
  }
}
