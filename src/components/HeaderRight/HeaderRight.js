import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderRight = ({ isAboutPage, onClose }) => (
  <nav className="HeaderRight">
    {isAboutPage
      ? <a className="HeaderRight__close" onClick={onClose}><i className="icon-close" /></a>
      : <Link to="/about">About</Link>
    }
  </nav>
);

HeaderRight.propTypes = {
  isAboutPage: PropTypes.bool,
  onClose: PropTypes.func,
};

HeaderRight.defaultProps = {
  isAboutPage: false,
  onClose: false,
};

export default HeaderRight;
