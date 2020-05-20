import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import Input from './Input';
import Tournament from './Tournament';
import Button from './Button';
import Error from './Error';
import getTournaments from '../actions/tournaments';
import editTournament from '../actions/editTournament';
import deleteTournament from '../actions/deleteTournament';
import createTournament from '../actions/createTournament';

import './Tournaments.css';
import TournamentInterface from '../interfaces/Tournament.interface';

const Tournaments = () => {
  const data: any = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  const onSearch = (e: any): void => {
    // convert user input to lowercase for comparison
    const name: string = e.target.value.toLowerCase();
    let tournaments: TournamentInterface[] = data.tournaments;
    // filter tournaments based on user input
    tournaments = tournaments.filter((tournament: any) =>
      tournament.name.toLowerCase().includes(name)
    );
    // dispatch search tournament action
    dispatch({
      type: 'SEARCH_TOURNAMENT',
      payload: tournaments
    });
  };

  const onCreateTournament = (): void => {
    const tournamentName: string | null = prompt('Tournament Name:');
    // if empty then return
    if (!tournamentName) {
      return;
    }
    // disptach tournament with user input to create new  tournament
    dispatch(createTournament(data.tournaments, tournamentName));
  };

  const onDelete = (tournament: any): void => {
    let deleteConfirm: boolean = window.confirm(
      'Do you really want to delete this tournament'
    );
    if (!deleteConfirm) {
      return;
    }

    let tournaments: TournamentInterface[] = data.tournaments;
    const index: number = tournaments.indexOf(tournament);
    // delete the tournament using index number
    tournaments.splice(index, 1);

    dispatch(deleteTournament(tournaments, tournament));
  };

  const onEdit = (tournament: any): void => {
    let editedName: string | null = prompt(
      'New Tournament Name:',
      tournament.name
    );
    if (!editedName || editedName === tournament.name) {
      return;
    }
    // find the tournament and edit the name with user input
    let tournaments = data.tournaments;
    tournaments.find(
      (tour: any) => tour.id === tournament.id
    ).name = editedName;

    dispatch(editTournament(tournaments, tournament, editedName));
  };

  return (
    <>
      <Input placeholder="Search tournament..." onChange={onSearch} />
      <Button className="create-tournament-btn" onClick={onCreateTournament}>
        CREATE TOURNAMENT
      </Button>
      <div className="tournament_list">
        {data.searchResult &&
          data.searchResult.map((tournament: any) => {
            return (
              <Tournament
                key={tournament.id}
                onEdit={onEdit}
                onDelete={onDelete}
                tournament={tournament}
              />
            );
          })}
      </div>
      {data.loading ? (
        <div
          style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Loading tournaments ...
        </div>
      ) : (
        ''
      )}
      {data.error ? <Error /> : ''}
    </>
  );
};

export default Tournaments;
