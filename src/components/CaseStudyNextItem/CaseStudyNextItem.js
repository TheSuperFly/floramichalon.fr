import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyNextItem = ({
  name,
  shortDescription,
  slug,
  image,
  index,
  onClick,
  onMouseOver,
}) => {
  function itemClicked() {
    onClick(slug);
  }

  function itemHovered() {
    onMouseOver(image, index);
  }

  return (
    <div className="CaseStudyNextItem" onClick={itemClicked} onMouseOver={itemHovered}>
      <h2 className="CaseStudyNextItem__title">{name}</h2>
      <span className="CaseStudyNextItem__shortDescription">{shortDescription}</span>
    </div>
  );
};

CaseStudyNextItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  shortDescription: PropTypes.string,
  slug: PropTypes.string,
  index: PropTypes.string,
};

CaseStudyNextItem.defaultProps = {
  name: '',
  image: '',
  index: '',
  shortDescription: '',
  slug: '',
};

export default CaseStudyNextItem;
