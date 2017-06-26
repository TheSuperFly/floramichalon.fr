import React from 'react';
import PropTypes from 'prop-types';

import ProjectHelper from 'Utils/ProjectHelper';

import ProjectBullet from './ProjectBullet';

class ProjectLane extends React.Component {
  changeProject = (id) => {
    this.props.retrieveProject(id);
  };

  buildBullets = () => {
    const { currentProjectId, projectSample } = this.props;

    const bullets = [];

    Object.keys(projectSample).map(key => (
      bullets.push(
        <ProjectBullet
          onClick={this.changeProject}
          name={projectSample[key].name}
          id={projectSample[key].id}
          active={projectSample[key].id === currentProjectId}
          key={`ProjectBullet-${projectSample[key].id}`}
        />,
      )
    ));

    return bullets;
  };

  calculatePixelToShift = () => {
    const { currentProjectId } = this.props;

    const numberOfProjects = ProjectHelper.countAllProjects() - this.props.firstBulletsToDisplay;

    const pixelShift = this.props.bulletHeight * (numberOfProjects - currentProjectId);

    if (pixelShift > 0) {
      return pixelShift;
    }

    return 0;
  };

  render() {
    const pixelToShift = this.calculatePixelToShift();

    const style = {
      transform: `translateY(${pixelToShift}px)`,
    };

    return (
      <aside className="ProjectLane" style={style}>
        {this.buildBullets()}
      </aside>
    );
  }
}

ProjectLane.propTypes = {
  retrieveProject: PropTypes.func.isRequired,
  projectSample: PropTypes.object,
  currentProjectId: PropTypes.number,
  bulletHeight: PropTypes.number,
  firstBulletsToDisplay: PropTypes.number,
};

ProjectLane.defaultProps = {
  projectSample: {},
  currentProjectId: 0,
  bulletHeight: 97,
  firstBulletsToDisplay: 3,
};

export default ProjectLane;
