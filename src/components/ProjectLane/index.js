import { connect } from 'react-redux';

import * as ProjectActions from 'Actions/ProjectActions';

import ProjectLane from './ProjectLane';

function mapStateToProps(state) {
  return {
    projectSample: state.projects.projectSample,
    currentProjectId: state.projects.currentProject.id,
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(ProjectActions.getProjectsSample());

  return {
    retrieveProject: function dispatchRetrieveProject(id) {
      dispatch(ProjectActions.retrieveProject(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectLane);
