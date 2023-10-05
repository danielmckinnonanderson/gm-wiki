import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributePanelComponent } from './attribute-panel/attribute-panel.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ResultsPanelComponent } from './results-panel/results-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoViewComponent } from './info-view/info-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NpcBackgroundPanelComponent } from './npc-background-panel/npc-background-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributePanelComponent,
    SearchViewComponent,
    ResultsPanelComponent,
    InfoViewComponent,
    NpcBackgroundPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

