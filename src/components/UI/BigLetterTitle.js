import React from 'react';
import PropTypes from 'prop-types';
import UpDownTextSwap from './UpDownTextSwap';

class BigLetterTitle extends React.PureComponent {
  render() {
    const {
      title,
      firstLetterToExtract,
      className,
      refContainer,
      onAnimationStart,
      onAnimationEnd,
    } = this.props;

    const bigLetter = firstLetterToExtract || title.charAt(0);

    return (
      <div className={`BigLetterTitle ${className}`} ref={refContainer}>
        {
          title &&
          <UpDownTextSwap
            text={title}
            textWrapper="h2"
            containerClassName="BigLetterTitle__titleContainer"
            className="BigLetterTitle__title"
            method="lines"
            onAnimationStart={onAnimationStart}
            onAnimationEnd={onAnimationEnd}
          />
        }
        <span className="BigLetterTitle__bigLetter">{bigLetter}</span>
      </div>
    );
  }
}

BigLetterTitle.propTypes = {
  title: PropTypes.string,
  firstLetterToExtract: PropTypes.string,
  className: PropTypes.string,
  refContainer: PropTypes.func,
  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,
};

BigLetterTitle.defaultProps = {
  title: '',
  firstLetterToExtract: '',
  className: '',
  refContainer: false,
  onAnimationStart: false,
  onAnimationEnd: false,
};

export default BigLetterTitle;
