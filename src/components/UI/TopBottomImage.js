import React from 'react';
import PropTypes from 'prop-types';

const TopBottomImage = props => (
  <div
    className={`TopBottomImage ${props.classNameContainer} ${props.showImage ? 'TopBottomImage--showed' : ''}`}
    ref={props.refContainer}
    style={{
      ...props.styleContainer,
      width: props.width,
      height: props.height,
    }}
  >
    <div
      className={`TopBottomImage__image ${props.classNameImage}`}
      ref={props.refImage}
      style={{
        ...props.styleImage,
        backgroundImage: `url(${props.image})`,
      }} />
  </div>
);

TopBottomImage.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  showImage: PropTypes.bool,
  classNameContainer: PropTypes.string,
  classNameImage: PropTypes.string,
  styleContainer: PropTypes.object,
  styleImage: PropTypes.object,
  refContainer: PropTypes.func,
  refImage: PropTypes.func,
};

TopBottomImage.defaultProps = {
  image: '',
  width: '',
  height: '',
  showImage: false,
  classNameContainer: '',
  classNameImage: '',
  styleContainer: {},
  styleImage: {},
  refContainer: null,
  refImage: null,
};

export default TopBottomImage;
