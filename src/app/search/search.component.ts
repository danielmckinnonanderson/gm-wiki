import { Component, OnInit } from '@angular/core';
import { NoResults, SearchService } from '../search.service';
import { ResultsPanelComponent } from '../results-panel/results-panel.component';
import { NPC } from 'src/data/data.types';
import { Router } from '@angular/router';

@Component({
  selector: 'search-view',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  searchQuery: string = "";
  results: any[] | NoResults = null as NoResults;

  constructor(private readonly searchSvc: SearchService,
             private readonly router: Router) {}

  ngOnInit(): void {
    this.searchSvc.results.subscribe(next => {
      this.results = next;
      console.info(this.results);
    });
  }

  onQueryChanged(): void {
    console.info("New query", this.searchQuery);
    this.searchSvc.onQueryChanged(this.searchQuery);
  }

  onSearchSelection(selected: NPC): void {
    console.info("New search selection", selected);
    this.router.navigateByUrl("/" + selected._metadata.uuid);
  }
}
