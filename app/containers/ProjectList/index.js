/*
 *
 * ProjectList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {selectProjects, selectLoading, selectError} from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import List from 'components/List';
import ListItem from 'components/ListItem';
import ProjectCard from 'components/ProjectCard';
import LoadingIndicator from 'components/LoadingIndicator';
import { defaultAction } from './actions';
import { createStructuredSelector } from 'reselect';


export class ProjectList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  render() {

  let mainContent = null;

  // Show a loading indicator when we're loading
  if (this.props.loading) {
    mainContent = (<List component={LoadingIndicator} />);

  // Show an error if there is one
  } else if (this.props.error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    mainContent = (<List component={ErrorComponent} />);

  // If we're not loading, don't have an error and there are repos, show the repos
} else if (this.props.data !== false) {
    mainContent = (<List items={this.props.data} component={ProjectCard} />);
  }

    return (
      <div className={styles.projectList}>
      <Helmet
        title="ProjectList"
        meta={[
          { name: 'description', content: 'Description of ProjectList' },
        ]}
      />
    <FormattedMessage {...messages.header} />
    {mainContent}
      </div>
    );
  }
}

ProjectList.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  data: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onLoad: React.PropTypes.func,
};

// const mapStateToProps = selectProjectList();

const mapStateToProps = createStructuredSelector({
  data: selectProjects(),
  loading: selectLoading(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (evt) => {
      dispatch(defaultAction());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
