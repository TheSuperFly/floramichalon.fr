import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { withRouter } from 'react-router';

import HeaderLeft from 'Components/HeaderLeft/HeaderLeft';
import HeaderRight from 'Components/HeaderRight/HeaderRight';

const Header = ({ location, history, isDisplayingLite }) => (
  <header className="Header">
    <Headroom disableInlineStyles>
      <HeaderLeft />
      {!isDisplayingLite && (
        <HeaderRight
          isAboutPage={location.pathname === "/about"}
          onClose={history.goBack}
        />
      )}
    </Headroom>
  </header>
);

Header.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isDisplayingLite: PropTypes.object,
};

Header.defaultProps = {
  isDisplayingLite: false,
};

export default withRouter(Header);
