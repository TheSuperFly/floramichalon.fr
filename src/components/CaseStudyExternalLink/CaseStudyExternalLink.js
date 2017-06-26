import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyExternalLink = ({ text, link }) => (
  <div className="CaseStudyExternalLink">
    <h3 className="CaseStudyExternalLink__title">{text}</h3>
    <a
      href={link}
      className="CaseStudyExternalLink__link button"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Case Study
    </a>
  </div>
);

CaseStudyExternalLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

CaseStudyExternalLink.defaultProps = {
  text: '',
  link: '',
};

export default CaseStudyExternalLink;
