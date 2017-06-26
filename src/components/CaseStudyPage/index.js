import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as ProjectActions from 'Actions/ProjectActions';

import CaseStudyPage from './CaseStudyPage';

function mapStateToProps(state) {
  return {
    caseStudy: state.projects.currentProject,
    nextProjectsSample: state.projects.nextProjectsSample,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveFullCaseStudy: function dispatchRetrieveFullCaseStudy(slug) {
      dispatch(ProjectActions.retrieveFullCaseStudy(slug));
    },

    retrieveNextProjectsSample: function dispatchRetrieveNextProjectsSample(currentId, count) {
      dispatch(ProjectActions.retrieveNextProjectsSample(currentId, count));
    },

    navigateToProject: function dispatchNavigateToProject(slug) {
      dispatch(ProjectActions.navigateToProject(slug));
    },
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaseStudyPage));
