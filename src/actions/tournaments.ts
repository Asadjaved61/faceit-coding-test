import { RootState } from '../reducers';
import {
  GET_TOURNAMENTS_REQUEST,
  GET_TOURNAMENTS_SUCCESS,
  GET_TOURNAMENTS_FAILURE
} from './actionTypes';
import TournamentsService from '../services/Tournaments.service';
import TournamentInterface from '../interfaces/Tournament.interface';

const tournamentService: TournamentsService = new TournamentsService();

// map datafrom api to tournament custom interface
const mapDataToTournament = (data: any): TournamentInterface[] => {
  data.map((tournament: any) => {
    return {
      id: tournament.id,
      name: tournament.name,
      organizer: tournament.organizer,
      game: tournament.game,
      participants: {
        current: tournament.participants.current,
        max: tournament.participants.max
      },
      startDate: tournament.startDate
    };
  });

  return data;
};

/*---- Async Action ---- */
const getTournamentsRequest = () => {
  return {
    type: GET_TOURNAMENTS_REQUEST
  };
};

const getTournamentsSuccess = (tournaments: any) => {
  return {
    type: GET_TOURNAMENTS_SUCCESS,
    payload: mapDataToTournament(tournaments)
  };
};

const getTournamentsFailure = (error: Error) => {
  return {
    type: GET_TOURNAMENTS_FAILURE,
    error
  };
};
// end

// Main Action
const getTournaments = () => {
  return (dispatch: any) => {
    dispatch(getTournamentsRequest());
    tournamentService
      .getTournaments()
      .then(data => dispatch(getTournamentsSuccess(data)))
      .catch(error => dispatch(getTournamentsFailure(error)));
  };
};

export default getTournaments;
