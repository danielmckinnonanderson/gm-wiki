import { Injectable } from '@angular/core';
import { UUID, NPC } from "../data/data.types";
const npcs = require("../data/npcs.json") as NPC[];

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  // TODO - types
  public getById(id: UUID): NPC | undefined {
    return npcs.find(npc => id === npc._metadata.uuid);
  }
}

