import PropTypes from 'prop-types';
import React from 'react';

import 'ComponentsStyle/ClippedImage/_clipped-image.scss';

const ClipContainer = ({ width, height, src, className, children, refContainer }) => {
  const imageStyle = {
    backgroundImage: `url(${src})`,
    clipPath: `url(#rcp-clipper)`,
    WebkitClipPath: `url(#rcp-clipper)`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  };

  const containerStyle = { width, height };

  return (
    <div className={`react-clip-path rcp ${className}`} style={containerStyle} ref={refContainer}>
      <div
        className="rcp-image"
        style={imageStyle}
      />
      <svg
        className="rcp-clipper-container"
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id="rcp-clipper">
            {children}
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

ClipContainer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  refContainer: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element,
};

ClipContainer.defaultProps = {
  className: '',
  refContainer: false,
  children: false,
};

export default ClipContainer;
