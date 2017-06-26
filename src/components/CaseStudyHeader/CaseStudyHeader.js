import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyHeader = ({ format, type, role }) => (
  <header className="CaseStudyHeader">
    <div className="CaseStudyHeaderLine">
      <span className="CaseStudyHeaderLine__title">Format</span>
      <h3 className="CaseStudyHeaderLine__value">{format}</h3>
    </div>

    <div className="CaseStudyHeaderLine">
      <span className="CaseStudyHeaderLine__title">Type</span>
      <h3 className="CaseStudyHeaderLine__value">{type}</h3>
    </div>

    <div className="CaseStudyHeaderLine">
      <span className="CaseStudyHeaderLine__title">Role</span>
      <h3 className="CaseStudyHeaderLine__value">{role}</h3>
    </div>
  </header>
);

CaseStudyHeader.propTypes = {
  format: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string,
};

CaseStudyHeader.defaultProps = {
  format: '',
  type: '',
  role: '',
};

export default CaseStudyHeader;
