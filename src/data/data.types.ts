import { Attributes } from "src/types";

export type Kind = "npc" | "item";

export type ArmorClass =
  |  0 |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
  | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40;

export type Alignment =
  | "lawful evil" | "lawful neutral" | "lawful good"
  | "neutral evil" | "true neutral" | "neutral good"
  | "chaotic evil" | "chaotic neutral" | "chaotic good"
  | "unaligned" | "any alignment";

export type ActionInfo = {
  title: string,
  type: string,
  to_hit?: string,
  reach?: string,
  targets?: string,
  on_hit?: string;
  description?: string,
}

export type NPC = {
  _metadata: { 
    kind: Kind
  },
  name: string,
  alignment: Alignment,
  size_desc: string,
  armor_class: ArmorClass | null,
  armor_desc: string | null,
  hit_points_const: number | null,
  hit_points_dice: string | null,
  speed: string | null,
  attributes: Attributes,
  damage_resistances: string[],
  condition_immunities: string[],
  senses?: {
    vision_desc: string | null,
    passive_perception: number,
  },
  languages: string[],
  challenge: {
    value: number,
    xp: number
  },
  features: {
    title: string,
    description: string
  }[],
  actions: ActionInfo[]
};
