import { combineReducers } from '@reduxjs/toolkit';
import { cardSetsReducer } from '../features/cardSets/cardSets.slice';
import { sessionReducer } from '../features/session/session.slice';

export const rootReducer = combineReducers({
  session: sessionReducer,
  cardSets: cardSetsReducer,
});
