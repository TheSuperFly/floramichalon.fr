import * as types from '../store/actionTypes';

import initialState from '../store/initialState';

function UIReducer(state = initialState.ui, action) {
  switch (action.type) {
    case types.PICK_SITE_VERSION:
      return {
        ...state,
        isDisplayingLite: action.shouldDisplayLite,
      };

    case types.LOCK_SCROLL_X:
      return {
        ...state,
        lockScroll: action.lockScroll,
      };

    case types.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case types.RETRIEVE_FULL_CASE_STUDY:
    case types.NAVIGATE_TO_PROJECT:
      return {
        ...state,
        theme: action.retrievedProject.theme,
        isConsultingAProject: true,
        showFooterLeft: true,
        showFooterRight: false,
      };

    case types.RETRIEVE_PROJECT:
      return {
        ...state,
        theme: action.retrievedProject.theme,
        isConsultingAProject: false,
        showFooterLeft: true,
        showFooterRight: true,
      };

    case types.SET_FOOTER_LEFT_VISIBILITY:
      return {
        ...state,
        showFooterLeft: action.visible,
      };

    case types.SET_FOOTER_RIGHT_VISIBILITY:
      return {
        ...state,
        showFooterRight: action.visible,
      };

    default:
      return state;
  }
}

export default UIReducer;
