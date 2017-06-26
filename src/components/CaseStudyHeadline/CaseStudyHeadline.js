import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyHeadline = ({ headline, image }) => (
  <div className="CaseStudyHeadline" style={{ backgroundImage: `url('${image}')` }}>
    <div className="CaseStudyHeadline__inner">
      <h2>{headline}</h2>
    </div>
  </div>
);

CaseStudyHeadline.propTypes = {
  headline: PropTypes.string,
  image: PropTypes.string,
};

CaseStudyHeadline.defaultProps = {
  headline: '',
  image: '',
};

export default CaseStudyHeadline;
