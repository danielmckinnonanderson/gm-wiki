import { Component, Input } from '@angular/core';
import { Alignment } from 'src/data/data.types';

@Component({
  selector: 'npc-background-panel',
  templateUrl: './npc-background-panel.component.html',
  styleUrls: ['./npc-background-panel.component.scss']
})
export class NpcBackgroundPanelComponent {
  // This field is for naming a NPC / specific instance of an NPC
  // For instance, if the party meets an Assassin Vine that can communicate with them, and they name it "Viney"
  @Input() familiarName?: string; 
   
  @Input() name!: string;
  @Input() alignment!: Alignment;
}
