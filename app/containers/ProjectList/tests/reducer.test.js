import expect from 'expect';
import projectListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('projectListReducer', () => {
  it('returns the initial state', () => {
    expect(projectListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
