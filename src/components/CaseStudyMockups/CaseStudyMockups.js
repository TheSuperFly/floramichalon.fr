import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyMockups = ({ mockups, name, enableBlocks }) => (
  <div className="CaseStudyMockups">
    {enableBlocks && <div className="CaseStudyMockups__leftBlock" style={{ transform: 'translateY(0)' }} />}
    <div className="CaseStudyMockups__inner">
      {mockups.map((mockup, key) => (
        <img src={mockup} alt={`Mockup n°${key + 1} of ${name}'s project`} key={`CaseStudyMockups-${key}`} />
        ))}
    </div>
    {enableBlocks && <div className="CaseStudyMockups__rightBlock" style={{ transform: 'translateY(80px)' }} />}
  </div>
);

CaseStudyMockups.propTypes = {
  mockups: PropTypes.array,
  name: PropTypes.string,
  enableBlocks: PropTypes.bool,
};

CaseStudyMockups.defaultProps = {
  mockups: [],
  name: '',
  enableBlocks: true,
};

export default CaseStudyMockups;
