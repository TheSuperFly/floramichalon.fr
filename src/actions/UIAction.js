import browser from 'detect-browser';

import * as types from '../store/actionTypes';

const unsupportedBrowsers = [
  // Because Firefox makes animation VERY sluggish.
  'firefox',
  // Because Safari goes wack on clippath.
  'safari',
  // Not tested but if both above failed ...
  'edge',
  'ie',
  // Responsive isn't available yet.
  'ios',
  'android',
];

export function checkBrowser() {
  if (unsupportedBrowsers.indexOf(browser.name) >= 0) {
    return {
      type: types.PICK_SITE_VERSION,
      shouldDisplayLite: true,
    };
  }

  return {
    type: types.PICK_SITE_VERSION,
    shouldDisplayLite: false,
  };
}

export function lockScrolling(shouldLockScrolling) {
  return {
    type: types.LOCK_SCROLL_X,
    lockScroll: shouldLockScrolling,
  };
}

export function changeTheme(theme = 'white') {
  return {
    type: types.CHANGE_THEME,
    theme,
  };
}

export function toggleFooterLeft(visible = true) {
  return {
    type: types.SET_FOOTER_LEFT_VISIBILITY,
    visible,
  };
}

export function toggleFooterRight(visible = true) {
  return {
    type: types.SET_FOOTER_RIGHT_VISIBILITY,
    visible,
  };
}
