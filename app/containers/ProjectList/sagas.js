import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { DEFAULT_ACTION } from './constants';
import { defaultActionSuccess, defaultActionError } from './actions';

import request from 'utils/request';

// Individual exports for testing
export function* getData() {
  const requestURL = `/api/publicGetProjectList`;

  // Call our request helper (see 'utils/request')
  const data = yield call(request, requestURL);

  if (!data.err) {
    yield put(defaultActionSuccess(data.data));
  } else {
    yield put(defaultActionError(data.err));
  }
}
//
// export function* _defaultSaga() {
//   yield* take(DEFAULT_ACTION, getData);
// }

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function* getDataWatcher() {
  while (yield take(DEFAULT_ACTION)) {
    yield call(getData);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* defaultData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getDataWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  defaultData,
];
