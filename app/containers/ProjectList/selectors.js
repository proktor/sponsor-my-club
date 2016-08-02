import { createSelector } from 'reselect';

/**
 * Direct selector to the projectList state domain
 */
const selectProjectListDomain = () => (state) => state.get('projectList');

/**
 * Other specific selectors
 */

 const selectLoading = () => createSelector(
   selectProjectListDomain(),
   (substate) => substate.get('loading')
 );

 const selectError = () => createSelector(
   selectProjectListDomain(),
   (substate) => substate.get('error')
 );

 const selectProjects = () => createSelector(
   selectProjectListDomain(),
   (substate) => substate.getIn(['userData', 'projects'])
 );

/**
 * Default selector used by ProjectList
 */

const selectProjectList = () => createSelector(
  selectProjectListDomain(),
  (substate) => substate.toJS()
);

// export default selectProjectList;
export {
  selectProjectListDomain,
  selectLoading,
  selectError,
  selectProjects,
};
