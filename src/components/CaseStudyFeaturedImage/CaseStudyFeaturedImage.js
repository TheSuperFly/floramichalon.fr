import React from 'react';
import PropTypes from 'prop-types';
import Parallax from 'Components/UI/Parallax';

const CaseStudyFeaturedImage = ({ name, image }) => (
  <Parallax
    speed="0.09"
    top="5%"
  >
    <div>
      <img className="CaseStudyFeaturedImage" alt={`Representation of ${name}`} src={image} />
    </div>
  </Parallax>
);

CaseStudyFeaturedImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

CaseStudyFeaturedImage.defaultProps = {
  image: '',
  name: '',
};

export default CaseStudyFeaturedImage;
