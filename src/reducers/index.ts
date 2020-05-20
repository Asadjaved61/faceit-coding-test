import { combineReducers } from 'redux';
import tournaments from './tournaments';

const rootReducer = combineReducers({
  data: tournaments
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
