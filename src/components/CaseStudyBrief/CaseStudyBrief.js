import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyBrief = ({ brief }) => (
  <div className="CaseStudyBrief">
    <div className="CaseStudyBrief__inner">
      <h3>Brief.</h3>
      <p>{brief}</p>
    </div>
  </div>
);

CaseStudyBrief.propTypes = {
  brief: PropTypes.string,
};

CaseStudyBrief.defaultProps = {
  brief: '',
};

export default CaseStudyBrief;
