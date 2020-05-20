import React from 'react';
import Button from './Button';
import getTournaments from '../actions/tournaments';
import { useDispatch } from 'react-redux';

const Error = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: '200px',
        margin: '0px auto 0px auto',
        textAlign: 'center'
      }}
    >
      Some thing went wrong.
      <Button
        style={{ float: 'none', marginTop: '10px' }}
        onClick={() => dispatch(getTournaments())}
      >
        RETRY
      </Button>
    </div>
  );
};

export default Error;
