import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { cardSetsFetchAPI, saveNewCardSetAPI } from '../../api/cardSets.api';
import {
  fetchCardSetsFailure,
  fetchCardSetsRequest,
  fetchCardSetsSuccess,
  saveNewCardSetRequest,
  saveNewCardSetSuccess,
  saveNewCardSetFailure,
} from './cardSets.slice';

import { CardSet, CardSetData } from './cardSets.types';

function* saveNewCardSetRequestSaga(action: PayloadAction<CardSetData>) {
  try {
    const data = action.payload;

    const response: CardSet = yield call(saveNewCardSetAPI, data);

    yield put(saveNewCardSetSuccess(response));
  } catch (error) {
    yield put(saveNewCardSetFailure());
  }
}

function* fetchCardSetsRequestSaga(action: PayloadAction) {
  try {
    const response: CardSet[] = yield call(cardSetsFetchAPI);

    yield put(fetchCardSetsSuccess(response));
  } catch (error) {
    yield put(fetchCardSetsFailure());
  }
}

export function* watchCardSetSaga() {
  yield takeLatest(saveNewCardSetRequest.type, saveNewCardSetRequestSaga);
  yield takeLatest(fetchCardSetsRequest.type, fetchCardSetsRequestSaga);
}
