export type Attributes = {
  str: AttrScore,
  dex: AttrScore,
  con: AttrScore,
  int: AttrScore,
  wis: AttrScore,
  cha: AttrScore,
};

export type NpcStatBlock = {
  name: string,
  hp: number,
  ac: number,
  statblock: Attributes,
  skills: { [key: string]: string },
  senses: { [key: string]: string },
  languages: string[],
  actions: { [key: string]: Action }
};

type Action = {
  name: string,
  text: string,
};

export type Roll20 = 1 | 2 | 3 | 4 | 5 | 6 | 7
  | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 
  | 16 | 17 | 18 | 19 | 20;

export type AttrScore = 
  Roll20 | 21 | 22 | 23 | 24 | 25
  | 26 | 27 | 28 | 29 | 30;

export type AttrModifer =
  | -5 | -4 | -3 | -2 | -1
  | 0  | 1  | 2  | 3  | 4  
  | 5  | 6  | 7  | 8  | 9  | 10;

