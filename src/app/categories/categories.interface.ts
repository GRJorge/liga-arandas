import { League } from '../leagues/leagues.interface';

export interface CreateCategory {
  name: string;
  league: string;
}

export interface Category {
  _id: string;
  name: string;
  league: League;
  createdAt: Date;
  updateAt: Date;
}
