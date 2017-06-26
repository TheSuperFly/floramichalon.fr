import React from 'react';
import PropTypes from 'prop-types';

import _xor from 'lodash/xor';

class Loader extends React.Component {
  state = {
    totalAssetsToPreload: 0,
    numberOfPreloadedAssets: 0,
    srcList: [],
    didFinishedPreloading: false,
    shouldLoaderUnmount: false,
  };

  componentWillMount() {
    if (this.props.sourceFunction) {
      this.props.sourceFunction();
    }
  }

  componentDidMount() {
    this._didFinishedPreloading();
  }

  componentWillReceiveProps(props) {
    const isSrcAlreadyLoaded = _xor(props.images, this.state.srcList).length === 0;

    if (!isSrcAlreadyLoaded) {
      this.setState({
        totalAssetsToPreload: props.images.length,
        didFinishedPreloading: isSrcAlreadyLoaded,
      });

      this.preloadNewImages(props.images);
    }
  }

  preloadNewImages(images) {
    const imageInstances = [];
    for (let i = 0; i < images.length; i++) {
      if (!this._checkIfAssetIsPreloaded(images[i])) {
        imageInstances[i] = new Image();
        imageInstances[i].src = images[i];
        imageInstances[i].onload = () => {
          this._notifyAssetPreloaded(images[i]);
        };
      }
    }
  }

  _notifyAssetPreloaded(src) {
    this.setState(state => ({
      ...state,
      numberOfPreloadedAssets: state.numberOfPreloadedAssets + 1,
      srcList: [
        ...state.srcList,
        src,
      ],
    }), this._didFinishedPreloading);
  }

  _checkIfAssetIsPreloaded(src) {
    return !!this.state.srcList[src] === true;
  }

  _didFinishedPreloading() {
    if (this.state.numberOfPreloadedAssets >= this.state.totalAssetsToPreload) {
      this.setState(state => ({
        ...state,
        didFinishedPreloading: true,
      }));

      return true;
    }
    return false;
  }

  unmountLoader = () => {
    this.setState({
      shouldLoaderUnmount: true,
    });
  };

  render() {
    const {
      numberOfPreloadedAssets,
      totalAssetsToPreload,
      didFinishedPreloading,
      shouldLoaderUnmount,
    } = this.state;

    if (didFinishedPreloading && shouldLoaderUnmount) {
      return this.props.children;
    } else if (this.props.userLoader) {
      const UserLoader = this.props.userLoader;

      return (
        <UserLoader
          preloadedAssets={numberOfPreloadedAssets}
          totalAssets={totalAssetsToPreload}
          onLeave={this.unmountLoader}
        />
      );
    }

    return <div />;
  }
}
Loader.propTypes = {
  children: PropTypes.element,
  userLoader: PropTypes.element,
  // eslint-disable-next-line react/no-unused-prop-types
  images: PropTypes.arrayOf(PropTypes.string),
  sourceFunction: PropTypes.func,
};

Loader.defaultProps = {
  children: false,
  userLoader: false,
  sourceFunction: false,
  images: [],
};

export default Loader;
