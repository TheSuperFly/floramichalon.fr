import React from 'react';
import PropTypes from 'prop-types';

import ClipContainer from 'Components/ClipContainer/ClipContainer';
import QueueHelper from 'Utils/QueueHelper';
import AnimationHelper from 'Utils/AnimationHelper';

class ProjectImageSquares extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isFullwidthImage: false,
    };

    this.oldProps = {};

    this.animationInProgress = false;

    this.animationQueue = new QueueHelper();
  }

  componentDidMount() {
    if (this.props.fullscreenImage === false && this.state.isFullwidthImage === true) {
      this.animationInProgress = true;

      this.splittedImage();
    } else if (this.props.fullscreenImage === true && this.state.isFullwidthImage === false) {
      this.animationInProgress = true;

      this.fullscreenImage();
    }
  }

  componentWillReceiveProps() {
    this.oldProps = this.props;
  }

  componentDidUpdate() {
    const { fullscreenImage } = this.props;

    if (this.animationInProgress === true && fullscreenImage !== this.oldProps.fullscreenImage) {
      return this.animationQueue.add(fullscreenImage
        ? this.fullscreenImage.bind(this)
        : this.splittedImage.bind(this),
      );
    }

    if (fullscreenImage === false && this.state.isFullwidthImage === true) {
      this.animationInProgress = true;

      return this.splittedImage();
    } else if (fullscreenImage === true && this.state.isFullwidthImage === false) {
      this.animationInProgress = true;

      return this.fullscreenImage();
    }

    return false;
  }

  fullscreenImage() {
    if (this.props.onAnimationStart) this.props.onAnimationStart();

    const { squareHeight, squareWidth } = this.props;

    AnimationHelper.projectImageSquareFullscreen(
      this.$ProjectImageLeft,
      this.$ProjectImageRight,
      this.$ClipContainer,
      squareHeight,
      squareWidth,
      this.animationComplete.bind(this, true),
    );
  }

  splittedImage() {
    if (this.props.onAnimationStart) this.props.onAnimationStart();

    const { squareWidth, squareHeight, marginSize, maskLeft, maskRight } = this.props;

    AnimationHelper.projectImageSquareSplit(
      this.$ProjectImageLeft,
      this.$ProjectImageRight,
      this.$ClipContainer,
      squareHeight,
      squareWidth,
      marginSize,
      maskLeft,
      maskRight,
      this.animationComplete.bind(this, false),
    );
  }

  animationComplete = (isFullwidthImage) => {
    this.animationInProgress = false;

    this.animationQueue.process();

    this.setState({ isFullwidthImage });

    if (this.props.onAnimationEnd) this.props.onAnimationEnd();
  };

  renderSvgSquares = () => {
    const { squareWidth, squareHeight, squareColor, marginSize, maskLeft, maskRight } = this.props;

    const { isFullwidthImage } = this.state;

    return [
      <rect
        key="ProjectImageSquares-1"
        x={maskLeft.x || 0}
        y={isFullwidthImage ? 0 : maskLeft.y}
        width={`${squareWidth}px`}
        height={`${squareHeight}px`}
        className="ProjectImageSquare__left"
        fill={squareColor}
        ref={c => (this.$ProjectImageLeft = c)}
      />,
      <rect
        key="ProjectImageSquares-2"
        x={`${maskRight.x || squareWidth + marginSize}px`}
        y={isFullwidthImage ? 0 : maskRight.y}
        width={`${squareWidth}px`}
        height={`${squareHeight}px`}
        className="ProjectImageSquare__right"
        fill={squareColor}
        ref={c => (this.$ProjectImageRight = c)}
      />,
    ];
  };

  render() {
    const { containerWidth, containerHeight, squareWidth, marginSize, image } = this.props;

    const { isFullwidthImage } = this.state;

    const hasImage = !!image;

    const props = {
      className: `ProjectImageSquares ${isFullwidthImage ? 'ProjectImageSquares--fullWidth' : 'ProjectImageSquares--normal'}`,
      width: containerWidth || ((squareWidth * 2) + marginSize),
      height: containerHeight || '100%',
    };

    if (hasImage) {
      return (
        <ClipContainer
          {...props}
          style={{ width: '100%', height: '100%' }}
          src={image}
          refContainer={c => (this.$ClipContainer = c)}
        >
          {this.renderSvgSquares()}
        </ClipContainer>
      );
    }
    return (
      <svg {...props}>
        {this.renderSvgSquares()}
      </svg>
    );
  }
}

ProjectImageSquares.propTypes = {
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  squareWidth: PropTypes.number,
  squareHeight: PropTypes.number,
  marginSize: PropTypes.number,
  image: PropTypes.string,
  fullscreenImage: PropTypes.bool,
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  squareColor: PropTypes.string,
  maskLeft: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  maskRight: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

ProjectImageSquares.defaultProps = {
  containerWidth: 0,
  containerHeight: 0,
  squareWidth: 303,
  squareHeight: 303,
  marginSize: 280,
  squareColor: '#1E1E1F',
  image: '',
  fullscreenImage: false,
  onAnimationStart: false,
  onAnimationEnd: false,
  maskLeft: {
    x: 0,
    y: '25%',
  },
  maskRight: {
    x: 0,
    y: '20%',
  },
};

export default ProjectImageSquares;
