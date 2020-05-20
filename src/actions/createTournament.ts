import TournamentsService from '../services/Tournaments.service';
import {
  CREATE_TOURNAMENT_REQUEST,
  CREATE_TOURNAMENT_SUCCESS,
  CREATE_TOURNAMENT_FAILURE
} from './actionTypes';

const tournamentService = new TournamentsService();

/*---- Async Action ---- */
const createTournamentRequest = () => {
  return {
    type: CREATE_TOURNAMENT_REQUEST
  };
};

const createTournamentSuccess = (newTournament: any, tournaments: any) => {
  tournaments.unshift(newTournament);
  return {
    type: CREATE_TOURNAMENT_SUCCESS,
    payload: [...tournaments]
  };
};

const createTournamentFailure = (error: any) => {
  return {
    type: CREATE_TOURNAMENT_FAILURE,
    error
  };
};
// end

const createTournament = (tournaments: any, tournamentName: any) => {
  return (dispatch: any) => {
    dispatch(createTournamentRequest);
    tournamentService
      .createTournament(tournamentName)
      .then(data => dispatch(createTournamentSuccess(data, tournaments)))
      .catch(error => dispatch(createTournamentFailure(error)));
  };
};

export default createTournament;
