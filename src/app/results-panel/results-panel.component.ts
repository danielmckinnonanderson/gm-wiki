import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NPC, UUID } from 'src/data/data.types';

@Component({
  selector: 'results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.scss']
})
export class ResultsPanelComponent {

  @Input() results: NPC[] | null = null;

  @Output() searchSelectionEvent = new EventEmitter<NPC>();

  constructor() {}

  clickedSelection(selection: NPC): void {
    this.searchSelectionEvent.emit(selection);
  }

  // TODO - keyboard nav within results
  private onFocusedChanged(focused: UUID | null): void {
    if (focused) {
      document.getElementById('result-button-' + focused)!.focus();
    }
  }
}

