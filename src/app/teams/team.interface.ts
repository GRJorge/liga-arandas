export interface Team {
  _id: string;
  name: string;
  shortName: string;
  shield: string;
  active: boolean;
  league: string;
  createdAt: Date;
  updateAt: Date;
}
export interface filters {
  _id?: string;
  name?: string;
  league?: string;
}
