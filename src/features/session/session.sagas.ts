import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import axios from '../../api';
import { createSessionAPI, terminateSessionAPI } from '../../api/session.api';
import {
  createSessionRequest,
  createSessionSuccess,
  createSessionFailure,
  terminateSessionRequest,
  terminateSessionSuccess,
  terminateSessionFailure,
} from './session.slice';

import { SessionData, UserCredentials } from './session.types';

function* createSessionRequestSaga(action: PayloadAction<UserCredentials>) {
  try {
    const data = action.payload;

    const response: SessionData = yield call(createSessionAPI, data);

    axios.defaults.headers.common.Authorization = `Bearer ${response.token}`;
    
    yield put(createSessionSuccess(response));
  } catch (error) {
    yield put(createSessionFailure());
  }
}

function* terminateSessionRequestSaga(
  action: PayloadAction
) {
  try {
    const data = action.payload;

    yield call(terminateSessionAPI, data);

    yield put(terminateSessionSuccess());
  } catch (error) {
    yield put(terminateSessionFailure());
  }
}

export function* watchSessionSaga() {
  yield takeLatest(createSessionRequest.type, createSessionRequestSaga);
  yield takeLatest(terminateSessionRequest.type, terminateSessionRequestSaga);
}
