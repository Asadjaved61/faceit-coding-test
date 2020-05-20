import TournamentsService from '../services/Tournaments.service';
import TournamentInterface from '../interfaces/Tournament.interface';
import {
  EDIT_TOURNAMENT_REQUEST,
  EDIT_TOURNAMENT_SUCCESS,
  EDIT_TOURNAMENT_FAILURE
} from './actionTypes';

const tournamentService: TournamentsService = new TournamentsService();

/*---- Async Action ---- */
const editTournamentRequest = () => {
  return {
    type: EDIT_TOURNAMENT_REQUEST
  };
};

const editTournamentSuccess = (tournaments: any) => {
  return {
    type: EDIT_TOURNAMENT_SUCCESS,
    payload: tournaments
  };
};

const editTournamentFailure = (error: Error) => {
  return {
    type: EDIT_TOURNAMENT_FAILURE,
    error
  };
};
// end

const editTournament = (
  tournaments: TournamentInterface[],
  tournament: TournamentInterface,
  newName: string
) => {
  return (dispatch: any) => {
    dispatch(editTournamentRequest);
    tournamentService
      .editTournament(tournament, newName)
      .then(data => dispatch(editTournamentSuccess(tournaments)))
      .catch(error => dispatch(editTournamentFailure(error)));
  };
};

export default editTournament;
