import React from 'react';
import PropTypes from 'prop-types';

const CaseStudySubBrief = ({ image }) => (
  <div className="CaseStudySubBrief" style={{ backgroundImage: `url('${image}')` }} />
);

CaseStudySubBrief.propTypes = {
  image: PropTypes.string,
};

CaseStudySubBrief.defaultProps = {
  image: '',
};

export default CaseStudySubBrief;
