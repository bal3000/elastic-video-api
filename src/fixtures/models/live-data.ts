export interface LiveData<T> {
  matchDetails: T;
  goal: Goal[];
}

interface Goal {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  scorerId: string;
  scorerName: string;
  assistPlayerId: string;
  assistPlayerName: string;
  optaEventId: string;
  homeScore: number;
  awayScore: number;
}
