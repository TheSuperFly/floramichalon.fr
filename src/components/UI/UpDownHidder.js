import React from 'react';
import PropTypes from 'prop-types';

class UpDownHidder extends React.Component {
  state = {
    height: 'inherit',
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      height: `${this.$Children.offsetHeight}px`,
    });
  }

  render() {
    const { className, children, hide } = this.props;

    const boundChildren = React.cloneElement(
      children,
      {
        className: `UpDownHidder__children ${children.props.className}`,
        ref: c => (this.$Children = c),
        style: { transform: `translateY(${hide ? this.state.height : '0px'})` },
      },
    );

    return (
      <div
        className={`UpDownHidder ${className}`}
        style={{
          height: this.state.height,
        }}
      >
        {boundChildren}
      </div>
    );
  }
}

UpDownHidder.propTypes = {
  hide: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
};

UpDownHidder.defaultProps = {
  hide: false,
  className: '',
  children: false,
};

export default UpDownHidder;
