import TournamentInterface from './Tournament.interface';

interface AppState {
  loading: boolean;
  tournaments: TournamentInterface[];
  searchResult: TournamentInterface[];
  error: Error | string;
}

export default AppState;
