import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributePanelComponent } from './attribute-panel/attribute-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
