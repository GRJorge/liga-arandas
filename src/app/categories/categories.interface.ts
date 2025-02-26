import { League } from '../leagues/leagues.interface';

export interface CreateCategory {
  name: string;
  league: string;
}

export interface Category {
  name: string;
  league: League;
  createdAt: Date;
  updateAt: Date;
}
