import React from 'react';
import PropTypes from 'prop-types';

import ProjectImageSquares from 'Components/ProjectImageSquares/ProjectImageSquares';
import UpDownTextSwap from 'Components/UI/UpDownTextSwap';

class LoaderSplash extends React.Component {
  tickInterval;

  state = {
    percentageToDisplay: '0%',
  };

  componentDidMount() {
    this.tickInterval = setInterval(this.tick, this.props.refreshTick);
  }

  tick = () => {
    const percentage = this.getPercentage();

    this.setState({
      percentageToDisplay: `${Math.round(percentage || 0)}%`,
      percentage,
    });

    if (this.props.preloadedAssets >= this.props.totalAssets) {
      clearInterval(this.tickInterval);

      setTimeout(this.onLeave, this.props.refreshTick);
    }
  };

  getPercentage = () => ((this.props.preloadedAssets / this.props.totalAssets) * 100) || 0;

  onLeave = () => {
    this.setState({
      percentage: 0,
      percentageToDisplay: false,
    }, () => {
      setTimeout(this.props.onLeave, this.props.delayBeforeLeaving);
    });
  };

  render() {
    const percentageToWidth = this.props.squareSize * ((this.state.percentage / 100) || 0);

    return (
      <div className="LoaderSplash">
        <UpDownTextSwap
          className="LoaderSplash__percent"
          text={this.state.percentageToDisplay}
          queuing={false}
        />
        <ProjectImageSquares
          squareHeight={percentageToWidth}
          containerWidth="883"
          maskRight={{ y: '20%', x: 280 + this.props.squareSize }}
        />
      </div>
    );
  }
}

LoaderSplash.propTypes = {
  preloadedAssets: PropTypes.number.isRequired,
  totalAssets: PropTypes.number.isRequired,
  onLeave: PropTypes.func.isRequired,
  squareSize: PropTypes.number,
  refreshTick: PropTypes.number,
  delayBeforeLeaving: PropTypes.number,
};

LoaderSplash.defaultProps = {
  squareSize: 303,
  refreshTick: 1500,
  delayBeforeLeaving: 300,
};

export default LoaderSplash;
