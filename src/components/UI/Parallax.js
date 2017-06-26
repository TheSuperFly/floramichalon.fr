import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

class Parallax extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = throttle(this.handleScroll.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getTop() {
    const { top = 0 } = this.props;

    return top.indexOf('%') > -1
      ? window.innerHeight * (top.replace('%', '') / 100)
      : parseInt(top, 10);
  }

  handleScroll() {
    const { speed } = this.props;

    const top = this.getTop();

    // Top positons
    const pageTop = window.pageYOffset;
    const newTop = (top - (pageTop * speed));

    // Set new top position
    this.parallaxElement.style.transform = `translateY(${newTop}px)`;
    this.parallaxElement.style.WebkitTransform = `translateY(${newTop}px)`;
    this.parallaxElement.style.msTransform = `translateY(${newTop}px)`;
  }

  render() {
    const { width, height } = this.props;

    return (
      <div
        ref={c => (this.parallaxElement = c)}
        style={{ width, height }}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.element,
  speed: PropTypes.number,

  // Style
  width: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.string,
};

Parallax.defaultProps = {
  width: 'auto',
  height: 'auto',
  top: 'inherit',
  speed: -0.03,
  children: false,
};

export default Parallax;
