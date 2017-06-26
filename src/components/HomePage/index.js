/**
 * DISCLAMER
 *
 * This file is because of react-router doesn't let
 * access to params when components is outside the
 * child of actual <Route />. And these actions
 * has to be trigger only on Home otherwise it
 * will create a UI flickering and load all
 * projects images for (maybe) nothing.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as ProjectActions from 'Actions/ProjectActions';

class Home extends React.PureComponent {
  componentWillMount() {
    this.props.retrieveProject(this.props.currentProjectId);
  }

  render() {
    return false;
  }
}

Home.propTypes = {
  retrieveProject: PropTypes.func.isRequired,
  currentProjectId: PropTypes.number,
};

Home.defaultProps = {
  currentProjectId: 0,
};

function mapStateToProps(state) {
  return {
    currentProjectId: state.projects.currentProject.id || 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveProject: function dispatchRetrieveProject(id) {
      dispatch(ProjectActions.retrieveProject(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
