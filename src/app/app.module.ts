import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributePanelComponent } from './attribute-panel/attribute-panel.component';
import { SearchComponent } from './search/search.component';
import { ResultsPanelComponent } from './results-panel/results-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributePanelComponent,
    SearchComponent,
    ResultsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
