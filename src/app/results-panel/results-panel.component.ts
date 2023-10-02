import { Component, Input } from '@angular/core';
import { NPC } from 'src/data/data.types';

@Component({
  selector: 'results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.scss']
})
export class ResultsPanelComponent {

  @Input() results: NPC[] | null = null;

  constructor() {}
}
