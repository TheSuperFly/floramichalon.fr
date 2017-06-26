import { connect } from 'react-redux';

import * as ProjectActions from 'Actions/ProjectActions';
import * as UIAction from 'Actions/UIAction';

import ProjectHead from './ProjectHead';

function mapStateToProps(state) {
  return {
    project: state.projects.currentProject,
    isConsultingAProject: state.ui.isConsultingAProject,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveNextProject: function dispatchRetrieveNextProject(currentId) {
      dispatch(ProjectActions.retrieveNextProject(currentId));
    },

    retrievePreviousProject: function dispatchRetrievePreviousProject(currentId) {
      dispatch(ProjectActions.retrievePreviousProject(currentId));
    },

    navigateToProject: function dispatchNavigateToProject(slug) {
      dispatch(ProjectActions.navigateToProject(slug));
    },

    lockScrolling: function dispatchLockScrolling(shouldLockScrolling) {
      dispatch(UIAction.lockScrolling(shouldLockScrolling));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectHead);
