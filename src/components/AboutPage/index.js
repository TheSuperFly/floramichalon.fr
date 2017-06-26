import { connect } from 'react-redux';

import * as UIAction from 'Actions/UIAction';

import AboutPage from './AboutPage';

function mapDispatchToProps(dispatch) {
  return {
    changeThemeToDark: function dispatchChangeThemeToBlack() {
      dispatch(UIAction.changeTheme('dark'));
    },

    hideFooter: function dispatchHideFooter() {
      dispatch(UIAction.toggleFooterLeft(false));
      dispatch(UIAction.toggleFooterRight(false));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(AboutPage);
