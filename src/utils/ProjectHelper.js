import * as projects from 'Data/projects.json';

class ProjectHelper {
  static getAllProjects() {
    return projects.projects;
  }

  static getAllProjectsImage() {
    const arr = [];

    projects.projects.map(project => {
      if (project.image) arr.push(project.image);
      if (project.extended.featuredImage) arr.push(project.extended.featuredImage);
      if (project.extended.imageSubBrief) arr.push(project.extended.imageSubBrief);
      if (project.extended.headlineBackgroundImage) arr.push(project.extended.headlineBackgroundImage);
      if (project.extended.mockups) arr.push(...project.extended.mockups);
    });

    return arr;
  }

  static countAllProjects() {
    return Object.keys(projects.projects).length;
  }

  static getProjectsSample() {
    return projects.projects.map(project => ({
      id: project.id,
      name: project.name,
    }));
  }

  static getProjectBySlug(slug) {
    return projects.projects.filter(project => project.slug === slug)[0];
  }

  static getProject(index) {
    if (this._checkIfProjectExist(index)) {
      return projects.projects[index];
    }

    return false;
  }

  static getNeighbourProjectId(currentIndex, way = 'next') {
    switch (way) {
      case 'next':
        if (this._checkIfProjectExist(currentIndex + 1)) {
          return currentIndex + 1;
        }

        return (currentIndex + 1) - ProjectHelper.countAllProjects();
      case 'previous':
        if (this._checkIfProjectExist(currentIndex - 1)) {
          return currentIndex - 1;
        }

        return ProjectHelper.countAllProjects() - 1;
      default:
        return 0;
    }
  }

  // @private
  static _checkIfProjectExist(index) {
    return index in projects.projects;
  }
}

export default ProjectHelper;
