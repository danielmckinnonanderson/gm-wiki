import { Component, Input, OnInit } from '@angular/core';
import { AttrModifer, AttrScore, Attributes } from 'src/types';
import { calculateModifier } from 'src/utils';

@Component({
  selector: 'attribute-panel',
  templateUrl: './attribute-panel.component.html',
  styleUrls: ['./attribute-panel.component.scss']
})
export class AttributePanelComponent implements OnInit {

  @Input() attributes!: Attributes;

  constructor() {}

  ngOnInit(): void {}

  attributeKeys(): string[] {
    return Object.keys(this.attributes);
  }

  getAttrValue(key: string): AttrScore {
    const x = (this.attributes as any)[key];
    return x;
  }

  getModifierText(attr: AttrScore): string {
    const mod: AttrModifer = calculateModifier(attr);
    return mod > -1
      ? "+" + mod
      : String(mod);
  }
}

