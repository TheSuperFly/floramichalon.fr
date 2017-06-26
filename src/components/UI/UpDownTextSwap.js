import React from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, TweenMax } from 'gsap';

import Lettering from 'Components/Lettering/Lettering';
import QueueHelper from 'Utils/QueueHelper';

class UpDownTextSwap extends React.Component {
  state = {
    text: '',
    nextText: '',
    containerHeight: undefined,
  };

  isAnimating = false;

  _isMounted = false;

  animationQueue = new QueueHelper();

  componentDidMount() {
    this._isMounted = true;

    this.showText(this.props.text);
  }

  componentWillReceiveProps(nextProps) {
    if (this.isAnimating && this.props.queuing) {
      if (nextProps.text !== this.state.text) {
        return this.animationQueue.add(
          this.changeText.bind(this, nextProps.text),
        );
      } else if (!nextProps.text) {
        return this.animationQueue.add(
          this.hideText.bind(this),
        );
      }
    }

    if (!nextProps.text) {
      return this.hideText();
    }

    if (nextProps.text !== this.state.text) {
      return this.changeText(nextProps.text);
    }

    return false;
  }

  hideText() {
    this.isAnimating = true;

    TweenMax.staggerTo(this.$LetteringText.children, 0.25, { bottom: `${this.state.containerHeight}px` }, 0.125, this.hideTextDone);
  }

  showText(text) {
    this.isAnimating = true;

    this.setState({ text }, () => {
      const containerHeight = this.$LetteringText.offsetHeight;

      this.setState({ containerHeight });

      TweenMax.set(this.$LetteringText.children, { bottom: `-${containerHeight}px` });

      TweenMax.staggerTo(this.$LetteringText.children, 0.25, { bottom: 0 }, 0.125, this.showTextDone);
    });
  }

  changeText(nextText) {
    if (this.isAnimating) return false;

    this.isAnimating = true;

    this.timeline = new TimelineMax({ onComplete: this.changeTextDone });

    TweenMax.set(this.$LetteringText.children, { bottom: 0 });
    TweenMax.set(this.$LetteringNextText.children, { bottom: 0 });

    return this.setState({ nextText }, () => {
      this.setState({
        containerHeight: this.$LetteringNextText.offsetHeight,
      }, () => {
        this.timeline
          .staggerTo(this.$LetteringText.children, 0.25, { bottom: `${this.state.containerHeight}px` }, 0.125, 0)
          .staggerTo(this.$LetteringNextText.children, 0.25, { bottom: `${this.state.containerHeight}px` }, 0.125, 0);
      });
    });
  }

  changeTextDone = () => {
    if (this._isMounted) {
      this.setState(state => ({
        text: state.nextText,
      }), () => {
        TweenMax.set(this.$LetteringText.children, { bottom: 0 });
        TweenMax.set(this.$LetteringNextText.children, { bottom: 0 });

        this.isAnimating = false;

        this.animationQueue.process();
      });
    }
  };

  showTextDone = () => {
    this.isAnimating = false;

    this.animationQueue.process();
  };

  hideTextDone = () => {
    this.isAnimating = false;

    this.animationQueue.process();
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="UpDownTextSwap" style={{ height: this.state.containerHeight }}>
        <Lettering
          className={`UpDownTextSwap__text ${this.props.className}`}
          customClass="UpDownTextSwap__letter letter"
          text={this.state.text}
          refContainer={c => this.$LetteringText = c}
          wrapper={this.props.textWrapper}
          method={this.props.method}
        />
        <Lettering
          className={`UpDownTextSwap__nextText ${this.props.className}`}
          customClass="UpDownTextSwap__letter letter"
          text={this.state.nextText}
          refContainer={c => this.$LetteringNextText = c}
          wrapper={this.props.textWrapper}
          method={this.props.method}
        />
      </div>
    );
  }
}

UpDownTextSwap.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  method: PropTypes.oneOf(['letters', 'words', 'lines']),
  textWrapper: PropTypes.string,
  queuing: PropTypes.bool,
};

UpDownTextSwap.defaultProps = {
  className: '',
  text: '',
  queuing: true,
};

export default UpDownTextSwap;
