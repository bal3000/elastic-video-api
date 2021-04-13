export interface InPlayMatch {
  matchStatus: 'Played' | 'Live';
  winner: 'home' | 'away';
  scores: PeriodScores;
}

interface PeriodScores {
  ht: Scores;
  ft: Scores;
  total: Scores;
  aggregate?: Scores;
}

interface Scores {
  home: number;
  away: number;
}
