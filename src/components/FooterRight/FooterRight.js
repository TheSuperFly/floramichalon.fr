import React from 'react';
import PropTypes from 'prop-types';

import ProjectLane from 'Components/ProjectLane';

const FooterRight = props => (
  <div className={`FooterRight ${!props.shouldDisplay ? 'FooterRight__hide' : ''}`}>
    <ProjectLane firstBulletsToDisplay={2} />
  </div>
);

FooterRight.propTypes = {
  shouldDisplay: PropTypes.bool,
};

FooterRight.defaultProps = {
  shouldDisplay: true,
};

export default FooterRight;
