import React from 'react';
import PropTypes from 'prop-types';

const FooterLeft = ({ shouldDisplay }) => (
  <div className={`FooterLeft ${!shouldDisplay ? 'FooterLeft__hide' : ''}`}>
    <div className="FooterLeft__socials">
      <a href="http://behance.com/" target="_blank" rel="noopener noreferrer"><i className="icon icon-behance">Behance</i></a>
      <a href="http://dribble.com/" target="_blank" rel="noopener noreferrer"><i className="icon icon-dribbble">Dribble</i></a>
      <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon icon-twitter">Twitter</i></a>
      <a href="http://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="icon icon-linkedin">LinkedIn</i></a>
    </div>
  </div>
);

FooterLeft.propTypes = {
  shouldDisplay: PropTypes.bool,
};

FooterLeft.defaultProps = {
  shouldDisplay: true,
};

export default FooterLeft;
