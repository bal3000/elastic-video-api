import { Fixture } from './fixture';
import { InPlayMatch } from './in-play-match';
import { LiveData } from './live-data';
import { MatchInfo } from './match-info';

export interface MatchWrapper {
  match: Fixture<MatchInfo, LiveData<InPlayMatch>>[];
}
