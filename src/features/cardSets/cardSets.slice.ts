import { createSlice } from '@reduxjs/toolkit';
import { RequestStatuses } from '../../interface/network';

import { CardSetsState } from './cardSets.types';

const initialState: CardSetsState = {
  cardSets: [],
  status: RequestStatuses.idle,
};

const cardSets = createSlice({
  name: 'cardSets',
  initialState,
  reducers: {
    saveNewCardSetRequest(state, { payload }) {
      state.status = RequestStatuses.loading;
    },
    saveNewCardSetSuccess(state, { payload }) {
      state.status = RequestStatuses.loaded;
      state.cardSets.push({ ...payload });
    },
    saveNewCardSetFailure(state) {
      state.status = RequestStatuses.error;
    },
    fetchCardSetsRequest(state) {
      state.status = RequestStatuses.loading;
    },
    fetchCardSetsSuccess(state, { payload }) {
      state.status = RequestStatuses.loaded;
      state.cardSets = payload;
    },
    fetchCardSetsFailure(state) {
      state.status = RequestStatuses.error;
    },
  },
});

export const {
  saveNewCardSetRequest,
  saveNewCardSetSuccess,
  saveNewCardSetFailure,
  fetchCardSetsRequest,
  fetchCardSetsSuccess,
  fetchCardSetsFailure,
} = cardSets.actions;

export const cardSetsReducer = cardSets.reducer;
