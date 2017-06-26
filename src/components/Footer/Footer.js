import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

import FooterLeft from 'Components/FooterLeft/FooterLeft';
import FooterRight from 'Components/FooterRight/FooterRight';

const Footer = ({ shouldDisplayFooterLeft, shouldDisplayFooterRight }) => (
  <footer className="Footer">
    <Headroom disableInlineStyles>
      <FooterLeft shouldDisplay={shouldDisplayFooterLeft} />
      <FooterRight shouldDisplay={shouldDisplayFooterRight} />
    </Headroom>
  </footer>
);

Footer.propTypes = {
  shouldDisplayFooterLeft: PropTypes.bool,
  shouldDisplayFooterRight: PropTypes.bool,
};

Footer.defaultProps = {
  shouldDisplayFooterLeft: true,
  shouldDisplayFooterRight: true,
};

export default Footer;
