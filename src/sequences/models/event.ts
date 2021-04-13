export interface Event {
  id: number;
  eventId: number;
  typeId: number;
  periodId: number;
  periodMinute: number;
  periodSecond: number;
  playerId: number;
  teamId: number;
  outcome: number;
  x: number;
  y: number;
  timestamp: string;
  flagEvent?: any;
  lastModified: string;
  teamUuid: string;
  qualifiers: Qualifier[];
  match: Match;
  sequence: Sequence;
  playerUuid: string;
}

interface Sequence {
  number: number;
  timeToNextEvent: number;
  isStart: number;
  isEnd: number;
  isInPossession: number;
  eventsCountSoFar: number;
  durationSoFar: number;
  startEventId: number;
  endEventId: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  numberOfPasses: number;
  numberOfPlayersInvolved: number;
  progress: number;
  length: number;
  width: number;
  absoluteWidth: number;
  duration: number;
  directSpeed: number;
  speed: number;
  isOpenPlayStart: number;
  startType: number;
  startEventTypeId: number;
  endEventTypeId: number;
  isEndShot: number;
  endXg: number;
  isStartPossession: number;
  isEndPossession: number;
  numberOfEvents: number;
  startQualifiers: Qualifier[];
  endQualifiers: Qualifier[];
}

interface Match {
  id: number;
  competitionId: number;
  seasonId: number;
  venueId: number;
  homeTeamId: number;
  awayTeamId: number;
  attendance: number;
  dateTime: string;
  matchday: number;
  competitionUuid: string;
  homeTeamUuid: string;
  awayTeamUuid: string;
  venueUuid: string;
  uuid: string;
}

interface Qualifier {
  id: number;
  qualifierId: number;
  value?: string;
}
