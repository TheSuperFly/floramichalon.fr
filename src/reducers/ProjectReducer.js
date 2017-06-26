import * as types from '../store/actionTypes';

import initialState from '../store/initialState';

function ProjectReducer(state = initialState.projects, action) {
  switch (action.type) {
    case types.RETRIEVE_PROJECT:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          ...action.retrievedProject,
        },
      };

    case types.RETRIEVE_NEXT_PROJECTS:
      return {
        ...state,
        nextProjectsSample: {
          ...state.nextProjectsSample,
          ...action.retrievedProjects,
        },
      };

    case types.GET_PROJECTS_SAMPLE:
      return {
        ...state,
        projectSample: {
          ...state.projectSample,
          ...action.projectSample,
        },
      };

    case types.RETRIEVE_ALL_PROJECT_IMAGES:
      return {
        ...state,
        projectImages: [
          ...action.imageList,
        ],
      };

    case types.NAVIGATE_TO_PROJECT:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          ...action.retrievedProject,
          ...state.currentProject.maskLeft,
          ...state.currentProject.maskRight,
        },
        nextProjectsSample: [
          ...action.nextProjectsSample,
        ],
      };

    case types.RETRIEVE_FULL_CASE_STUDY:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          ...action.retrievedProject,
        },
        nextProjectsSample: [
          ...action.nextProjectsSample,
        ],
      };

    default:
      return state;
  }
}

export default ProjectReducer;
