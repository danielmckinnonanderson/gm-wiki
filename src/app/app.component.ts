import { Component } from '@angular/core';
import { AttributePanelComponent } from './attribute-panel/attribute-panel.component';
import { Attributes } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gm-wiki';

  charName = "Some Name"

  attr: Attributes = {
    str: 20,
    dex: 10,
    con: 12,
    int: 14,
    wis: 17,
    cha: 20
  }
}
