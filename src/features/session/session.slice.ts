import { createSlice } from '@reduxjs/toolkit';
import { localStorageTokenName } from '../../constants';

import { RequestStatuses } from '../../interface/network';
import { SessionState } from './session.types';

const initialState: SessionState = {
  user: null,
  token: localStorage.getItem(localStorageTokenName) || null,
  status: RequestStatuses.idle,
};

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    createSessionRequest(state, { payload }) {
      state.status = RequestStatuses.loading;
    },
    createSessionSuccess(state, { payload }) {
      state.status = RequestStatuses.loaded;
      state.user = payload.user;
      state.token = payload.token;
      localStorage.setItem(localStorageTokenName, payload.token);
    },
    createSessionFailure(state) {
      state.status = RequestStatuses.error;
    },
    terminateSessionRequest() {},
    terminateSessionSuccess(state) {
      state = Object.assign(state, initialState);
      localStorage.removeItem(localStorageTokenName);
    },
    terminateSessionFailure() {},
  },
});

export const {
  createSessionRequest,
  createSessionSuccess,
  createSessionFailure,
  terminateSessionRequest,
  terminateSessionSuccess,
  terminateSessionFailure,
} = session.actions;

export const sessionReducer = session.reducer;
