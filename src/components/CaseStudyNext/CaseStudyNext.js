import React from 'react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap';

import TopBottomImage from 'Components/UI/TopBottomImage';
import CaseStudyNextItem from 'Components/CaseStudyNextItem/CaseStudyNextItem';

import AnimationHelper from 'Utils/AnimationHelper';

class CaseStudyNext extends React.Component {
  state = {
    hoveredProjectImage: '',
    hoveredProjectIndex: 0,
    showImage: false,
  };

  timeline;

  handleCaseStudyMouseEnter = () => {
    if (this.state.enlarge) return false;

    return this.setState({
      showImage: true,
    });
  };

  handleCaseStudyMouseLeave = () => {
    if (this.state.enlarge) return false;

    return this.setState({
      showImage: false,
    });
  };

  handleCaseStudyMouseHover = (imageUrl, index) => {
    if (this.state.enlarge) return false;

    return this.setState({
      hoveredProjectImage: imageUrl,
      hoveredProjectIndex: index,
    });
  };

  handleCaseStudyClick = (slug) => {
    this.setState({
      enlarge: true,
      showImage: true,
    }, () => {
      this.timeline = new TimelineLite({
        onComplete: this.caseStudyAnimationComplete.bind(this, slug),
      });

      AnimationHelper.caseStudyNextEnlarge(
        this.timeline,
        this.$ImageContainer,
        this.$Container,
      );
    });
  };

  caseStudyAnimationComplete = (slug) => {
    this.props.navigateToProject(slug);

    this.setState({
      enlarge: false,
      showImage: false,
    }, () => {
      window.scrollTo(0, 0);
      this.timeline.pause(0, false);
    });
  };

  render() {
    const imagePositionY = this.state.hoveredProjectIndex === 0 ? '-75px' : '0';

    return (
      <div className="CaseStudyNext" id="caseStudyNext" ref={c => (this.$Container = c)}>
        <div className="row">
          <h3 className="CaseStudyNext__title">Next projects</h3>
          <div
            className="CaseStudyNext__inner"
            onMouseEnter={this.handleCaseStudyMouseEnter}
            onMouseLeave={this.handleCaseStudyMouseLeave}
          >

            <div className="CaseStudyNext__items">
              {this.props.nextProjects.map((nextProject, index) => (
                <CaseStudyNextItem
                  {...nextProject}
                  onClick={this.handleCaseStudyClick}
                  onMouseOver={this.handleCaseStudyMouseHover}
                  key={`nextProject-${nextProject.id}`}
                  index={index}
                />
              ))}
            </div>

            <TopBottomImage
              classNameContainer="CaseStudyNext__imageContainer"
              classNameImage="CaseStudyNext__image"
              showImage={this.state.showImage}
              image={this.state.hoveredProjectImage}
              width="300px"
              height="300px"
              refContainer={c => (this.$ImageContainer = c)}
              styleContainer={{
                transform: `translateY(${imagePositionY})`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

CaseStudyNext.propTypes = {
  nextProjects: PropTypes.object.isRequired,
  navigateToProject: PropTypes.func.isRequired,
};

export default CaseStudyNext;
