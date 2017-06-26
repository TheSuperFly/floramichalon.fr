import React from 'react';
import PropTypes from 'prop-types';

class Lettering extends React.Component {
  injector = (content, splitter, className, after) => {
    const a = content.split(splitter);

    if (a.length) {
      return a.map((item, i) => (
        <span
          className={`${className}-${i + 1}`}
          key={`Lettering-${item}-${i}`}
          aria-hidden="true"
        >
          {item}{after}
        </span>
      ));
    }

    return <span />;
  };

  renderSpan = (text) => {
    switch (this.props.method) {
      case 'words':
        return this.injector(text, ' ', this.props.customClass || 'word', ' ');

      case 'lines':
        return this.injector(text, '<br>', this.props.customClass || 'line', '');

      default:
        return this.injector(text, '', this.props.customClass || 'letter', '');
    }
  };

  render() {
    return (
      React.createElement(
        this.props.wrapper,
        {
          className: this.props.className,
          ref: this.props.refContainer,
          style: this.props.style,
          'aria-label': this.props.text,
        },
        this.renderSpan(this.props.text),
      )
    );
  }
}

Lettering.propTypes = {
  text: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['letters', 'words', 'lines']),
  className: PropTypes.string,
  style: PropTypes.object,
  wrapper: PropTypes.string,
  customClass: PropTypes.string,
  refContainer: PropTypes.func,
};

Lettering.defaultProps = {
  text: '',
  method: 'letters',
  wrapper: 'div',
  style: {},
  className: '',
  customClass: '',
  refContainer: false,
};

export default Lettering;
