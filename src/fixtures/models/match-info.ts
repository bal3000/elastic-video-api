export interface MatchInfo {
  id: string;
  description: string;
  competition: { name: string; competitionFormat: string };
  tournamentCalendar: { id: string; name: string };
  contestant: Contestant[];
}

interface Contestant {
  id: string;
  name: string;
  officialName: string;
  position: 'home' | 'away';
}
