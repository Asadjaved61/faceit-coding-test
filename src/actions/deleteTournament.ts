import TournamentsService from '../services/Tournaments.service';
import {
  DELETE_TOURNAMENT_REQUEST,
  DELETE_TOURNAMENT_SUCCESS,
  DELETE_TOURNAMENT_FAILURE
} from './actionTypes';

const tournamentService = new TournamentsService();

/*---- Async Action ---- */
const deleteTournamentRequest = () => {
  return {
    type: DELETE_TOURNAMENT_REQUEST
  };
};

const deleteTournamentSuccess = (tournaments: any) => {
  return {
    type: DELETE_TOURNAMENT_SUCCESS,
    payload: tournaments
  };
};

const deleteTournamentFailure = (error: any) => {
  return {
    type: DELETE_TOURNAMENT_FAILURE,
    error
  };
};
// end

const deleteTournament = (tournaments: any, tournament: any) => {
  return (dispatch: any) => {
    dispatch(deleteTournamentRequest);
    tournamentService
      .deleteTournament(tournament)
      .then(data => dispatch(deleteTournamentSuccess(tournaments)))
      .catch(error => dispatch(deleteTournamentFailure(error)));
  };
};

export default deleteTournament;
