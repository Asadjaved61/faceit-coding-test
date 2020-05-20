import { RootState } from '.';
import AppState from '../interfaces/AppState.interface';

const initialState: AppState = {
  loading: false,
  tournaments: [],
  searchResult: [],
  error: ''
};
function tournaments(state = initialState, action: any) {
  switch (action.type) {
    case 'GET_TOURNAMENTS_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'GET_TOURNAMENTS_SUCCESS':
      return {
        tournaments: [...action.payload],
        searchResult: [...action.payload],
        loading: false,
        error: ''
      };

    case 'GET_TOURNAMENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'SEARCH_TOURNAMENT':
      return {
        ...state,
        searchResult: [...action.payload]
      };

    case 'EDIT_TOURNAMENT_ REQUEST':
      return {
        ...state
      };

    case 'EDIT_TOURNAMENT_SUCCESS':
      return {
        tournaments: [...action.payload],
        searchResult: [...action.payload],
        loading: false,
        error: ''
      };

    case 'EDIT_TOURNAMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'DELETE_TOURNAMENT_REQUEST':
      return {
        ...state
      };

    case 'DELETE_TOURNAMENT_SUCCESS':
      return {
        tournaments: [...action.payload],
        searchResult: [...action.payload],
        loading: false,
        error: ''
      };

    case 'DELETE_TOURNAMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'CREATE_TOURNAMENT_REQUEST':
      return {
        ...state
      };

    case 'CREATE_TOURNAMENT_SUCCESS':
      return {
        tournaments: [...action.payload],
        searchResult: [...action.payload],
        loading: false,
        error: ''
      };

    case 'CREATE_TOURNAMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };
  }
  return state;
}

export default tournaments;
