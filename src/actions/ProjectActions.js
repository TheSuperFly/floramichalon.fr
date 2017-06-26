import { push } from 'react-router-redux';

import ProjectsHelper from 'Utils/ProjectHelper';

import * as types from '../store/actionTypes';

export function retrieveProject(id) {
  return (dispatch) => {
    const retrievedProject = ProjectsHelper.getProject(id || 0);

    dispatch({
      type: types.RETRIEVE_PROJECT,
      retrievedProject,
    });

    dispatch({
      type: types.CHANGE_THEME,
      theme: retrievedProject.theme,
    });
  };
}

export function retrieveNextProject(currentId) {
  return (dispatch) => {
    const nextId = ProjectsHelper.getNeighbourProjectId(currentId, 'next');

    const retrievedProject = ProjectsHelper.getProject(nextId);

    dispatch({
      type: types.RETRIEVE_PROJECT,
      retrievedProject,
    });

    dispatch({
      type: types.CHANGE_THEME,
      theme: retrievedProject.theme,
    });
  };
}

export function retrievePreviousProject(currentId) {
  return (dispatch) => {
    const previousId = ProjectsHelper.getNeighbourProjectId(currentId, 'previous');

    const retrievedProject = ProjectsHelper.getProject(previousId);

    dispatch({
      type: types.RETRIEVE_PROJECT,
      retrievedProject,
    });

    dispatch({
      type: types.CHANGE_THEME,
      theme: retrievedProject.theme,
    });
  };
}

export function retrieveNextProjectsSample(currentId, count = 2) {
  const retrievedProjects = [];

  for (let i = 0; i < count; i++) {
    const nextId = ProjectsHelper.getNeighbourProjectId(currentId + i, 'next');

    const { id, name, shortDescription, image, slug } = ProjectsHelper.getProject(nextId);

    retrievedProjects.push({ id, name, shortDescription, image, slug });
  }

  return {
    type: types.RETRIEVE_NEXT_PROJECTS,
    retrievedProjects,
  };
}

export function getProjectsSample() {
  const projectSample = ProjectsHelper.getProjectsSample();

  return {
    type: types.GET_PROJECTS_SAMPLE,
    projectSample,
  };
}

export function retrieveAllProjectImages() {
  const imageList = ProjectsHelper.getAllProjectsImage();

  return {
    type: types.RETRIEVE_ALL_PROJECT_IMAGES,
    imageList,
  };
}

export function navigateToProject(slug) {
  return (dispatch) => {
    const retrievedProject = ProjectsHelper.getProjectBySlug(slug);

    if (!retrievedProject) {
      dispatch(push(`/`));
    }

    const nextProjectsSample = retrieveNextProjectsSample(retrievedProject.id).retrievedProjects;

    dispatch(push(`/project/${slug}`));

    return (
      dispatch({
        type: types.NAVIGATE_TO_PROJECT,
        nextProjectsSample,
        retrievedProject,
      })
    );
  };
}

export function retrieveFullCaseStudy(slug) {
  return (dispatch) => {
    const retrievedProject = ProjectsHelper.getProjectBySlug(slug);

    if (!retrievedProject) {
      return dispatch(push('/'));
    }

    const nextProjectsSample = retrieveNextProjectsSample(retrievedProject.id).retrievedProjects;

    return (
      dispatch({
        type: types.RETRIEVE_FULL_CASE_STUDY,
        retrievedProject,
        nextProjectsSample,
      })
    );
  };
}
