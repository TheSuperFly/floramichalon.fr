import { connect } from 'react-redux';

import Footer from './Footer';

function mapStateToProps(state) {
  return {
    shouldDisplayFooterLeft: state.ui.showFooterLeft,
    shouldDisplayFooterRight: state.ui.showFooterRight,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Footer);
