import { all } from 'redux-saga/effects';
import { watchCardSetSaga } from '../features/cardSets/cardSets.sagas';

import { watchSessionSaga } from '../features/session/session.sagas';

export function* rootSaga() {
  yield all([watchSessionSaga(), watchCardSetSaga()]);
}
