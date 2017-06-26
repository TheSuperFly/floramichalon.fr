import React from 'react';
import keydown from 'react-keydown';
import PropTypes from 'prop-types';

import ProjectImageSquares from 'Components/ProjectImageSquares/ProjectImageSquares';
import ProjectMeta from 'Components/ProjectMeta/ProjectMeta';

class ProjectHead extends React.Component {
  state = {
    squareHeight: 0,
  };

  imageTimeout = 500;

  componentDidMount() {
    setTimeout(() => {
      this.setState({ squareHeight: 303 });
    }, this.imageTimeout);
  }

  @keydown('right')
  nextProject() {
    if (this.props.isConsultingAProject) {
      return;
    }

    const id = this.props.project.id;

    this.props.retrieveNextProject(id);
  }

  @keydown('left')
  previousProject() {
    if (this.props.isConsultingAProject) {
      return;
    }

    const id = this.props.project.id;

    this.props.retrievePreviousProject(id);
  }

  navigateToProject = (slug) => {
    this.props.navigateToProject(slug);
  };

  lockScrolling = () => {
    this.props.lockScrolling(true);
  };

  unlockScrolling = () => {
    this.props.lockScrolling(false);
  };

  render() {
    const { project, isConsultingAProject } = this.props;

    return (
      <div className="ProjectHead">
        <ProjectImageSquares
          image={project.image}
          maskLeft={project.maskLeft}
          maskRight={project.maskRight}
          squareHeight={isConsultingAProject ? 303 : this.state.squareHeight}
          fullscreenImage={isConsultingAProject}
          onAnimationStart={this.lockScrolling}
          onAnimationEnd={this.unlockScrolling}
        />
        <div className="row">
          <ProjectMeta
            id={project.id}
            name={project.name}
            slug={project.slug}
            shortDescription={project.shortDescription}
            year={project.year}
            image={project.image}
            inProjectPage={isConsultingAProject}
            navigateToProject={this.navigateToProject}
          />
        </div>
      </div>
    );
  }
}

ProjectHead.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    shortDescription: PropTypes.string,
    year: PropTypes.number,
    image: PropTypes.string,
    maskLeft: PropTypes.array,
    maskRight: PropTypes.array,
    id: PropTypes.number,
  }).isRequired,
  isConsultingAProject: PropTypes.bool,
  retrievePreviousProject: PropTypes.func.isRequired,
  retrieveNextProject: PropTypes.func.isRequired,
  navigateToProject: PropTypes.func.isRequired,
  lockScrolling: PropTypes.func.isRequired,
};

ProjectHead.defaultProps = {
  isConsultingAProject: false,
};

export default ProjectHead;
