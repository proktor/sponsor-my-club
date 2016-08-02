/*
 *
 * ProjectList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DEFAULT_ACTION_SUCCESS,
  DEFAULT_ACTION_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  userData: fromJS({
    projects: false,
  }),
});


function projectListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'projects'], false);
    case DEFAULT_ACTION_SUCCESS:
      return state
        .setIn(['userData', 'projects'], action.data)
        .set('loading', false);
    case DEFAULT_ACTION_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default projectListReducer;
