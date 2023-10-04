import { Component, OnInit } from '@angular/core';
import { NoResults, SearchService } from '../search.service';
import { ResultsPanelComponent } from '../results-panel/results-panel.component';
import { NPC } from 'src/data/data.types';
import { Router } from '@angular/router';

@Component({
  selector: 'search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {
  searchQuery: string = "";
  results: any[] | NoResults = null as NoResults;

  constructor(private readonly searchSvc: SearchService,
             private readonly router: Router) {}

  ngOnInit(): void {
    this.searchSvc.results.subscribe(next => {
      this.results = next;
      console.info(this.results);
    });

    document.addEventListener('keyup', this.onKeyup);
  }

  onQueryChanged(): void {
    console.info("New query", this.searchQuery);
    this.searchSvc.onQueryChanged(this.searchQuery);
  }

  onSearchSelection(selected: NPC): void {
    console.info("New search selection", selected);
    this.router.navigateByUrl("/info/" + selected._metadata.uuid);
  }

  // TODO - keyboard navigation in result panel
  private onKeyup(event: KeyboardEvent): void {
    const inputId = "search-input";
    const active = document.activeElement;

    switch (event.key) {
      case "/": {
        document.getElementById(inputId)!.focus();
        break;
      }
      case "ArrowUp": {
        break;
      }
      case "ArrowDown": {
        if (active?.id == inputId) {
        }
        break;
      }
    }
  }
}

