import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

type AppViews = "search" | "character-sheet" | "session-notes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view: AppViews = "search";
}
