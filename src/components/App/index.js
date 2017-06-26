import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as ProjectActions from 'Actions/ProjectActions';
import * as UIAction from 'Actions/UIAction';

import App from './App';

function mapStateToProps(state) {
  return {
    isDisplayingLite: state.ui.isDisplayingLite,
    theme: state.ui.theme,
    projectImages: state.projects.projectImages,
    shouldLockScrolling: state.ui.lockScroll,
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(UIAction.checkBrowser());

  return {
    retrieveAllProjectImages: function dispatchRetrieveAllProjectImages() {
      dispatch(ProjectActions.retrieveAllProjectImages());
    },
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
