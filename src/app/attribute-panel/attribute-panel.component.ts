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

  // Can't remove node from its own info page
  @Input() showRemoveButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  attributeKeys(): string[] {
    return Object.keys(this.attributes);
  }

  getAttrValueText(key: string): string {
    const value = this.getAttrValue(key);
    return value >= 10
      ? String(value)
      : `0${String(value)}`;
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

