import { Component, Input } from '@angular/core';

@Component({
  selector: 'actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss']
})
export class ActionsPanelComponent {
  @Input() actions!: any[];

  showRemoveButton: boolean = false;

  expanded: Set<string> = new Set();

  constructor() {}

  clickedDetails(title: string): void {
    this.expanded.has(title)
      ? this.expanded.delete(title)
      : this.expanded.add(title);
  }
}
