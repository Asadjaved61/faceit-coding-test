import { API_TOURNAMENTS_URL } from '../constants/api';
import TournamentInterface from '../interfaces/Tournament.interface';

class TournamentsService {
  createTournament = (tournamentname: string): Promise<any> => {
    return fetch(`${API_TOURNAMENTS_URL}`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        name: tournamentname
      })
    }).then(resp => resp.json());
  };

  deleteTournament = (tournament: TournamentInterface): Promise<any> => {
    return fetch(`${API_TOURNAMENTS_URL}/${tournament.id}`, {
      method: 'DELETE'
    }).then(resp => resp.json());
  };

  editTournament = (
    tournament: TournamentInterface,
    newName: string
  ): Promise<any> => {
    return fetch(`${API_TOURNAMENTS_URL}/${tournament.id}`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PATCH',
      body: JSON.stringify({
        name: newName
      })
    }).then(resp => resp.json());
  };

  getTournaments = (): Promise<any> => {
    return fetch(API_TOURNAMENTS_URL).then(resp => resp.json());
  };
}

export default TournamentsService;
