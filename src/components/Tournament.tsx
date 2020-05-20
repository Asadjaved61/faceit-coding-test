import React from 'react';
import H6 from './H6';
import Button from './Button';
import { formatDateAndTime } from '../utils/helper-functions';
import TournamentInterface from '../interfaces/Tournament.interface';

import './Tournament.css';

const Tournament = (props: any) => {
  const {
    name,
    organizer,
    game,
    participants,
    startDate
  }: TournamentInterface = props.tournament;

  return (
    <div className="tournament">
      <H6>{name}</H6>
      <div>Organizer: {organizer}</div>
      <div>Game: {game}</div>
      <div>Participants: {`${participants.current}/${participants.max}`}</div>
      <div>Start: {formatDateAndTime(startDate)}</div>
      <Button onClick={() => props.onEdit(props.tournament)}>EDIT</Button>
      <Button onClick={() => props.onDelete(props.tournament)}>Delete</Button>
    </div>
  );
};

export default Tournament;
