/*
 *
 * ProjectList actions
 *
 */

import {
  DEFAULT_ACTION,
  DEFAULT_ACTION_SUCCESS,
  DEFAULT_ACTION_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function defaultActionSuccess(data) {
  return {
    type: DEFAULT_ACTION_SUCCESS,
    data,
  };
}

export function defaultActionError(error) {
  return {
    type: DEFAULT_ACTION_ERROR,
    error,
  };
}
