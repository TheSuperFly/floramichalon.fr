import PropTypes from 'prop-types';
import React from 'react';

import CaseStudyNext from 'Components/CaseStudyNext/CaseStudyNext';
import CaseStudyHeader from 'Components/CaseStudyHeader/CaseStudyHeader';
import CaseStudyBrief from 'Components/CaseStudyBrief/CaseStudyBrief';
import CaseStudySubBrief from 'Components/CaseStudySubBrief/CaseStudySubBrief';
import CaseStudyFeaturedImage from 'Components/CaseStudyFeaturedImage/CaseStudyFeaturedImage';
import CaseStudyHeadline from 'Components/CaseStudyHeadline/CaseStudyHeadline';
import CaseStudyMockups from 'Components/CaseStudyMockups/CaseStudyMockups';
import CaseStudyExternalLink from 'Components/CaseStudyExternalLink/CaseStudyExternalLink';

class CaseStudyPage extends React.Component {
  state = {
    extendedDataHasLoaded: false,
  };

  componentWillMount() {
    const slug = this.props.match.params.slug;

    this.props.retrieveFullCaseStudy(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.caseStudy.extended) {
      this.setState({
        extendedDataHasLoaded: true,
      });
    }
  }

  render() {
    const { caseStudy, nextProjectsSample } = this.props;

    const extended = caseStudy.extended;

    return (
      <section
        className={`CaseStudyPage ${this.state.extendedDataHasLoaded ? 'CaseStudyPage--loaded' : ''} _theme-${caseStudy.theme}`}
      >
        <CaseStudyHeader
          format={extended.format}
          type={extended.type}
          role={extended.role}
        />

        <CaseStudyBrief
          brief={extended.brief}
        />

        <CaseStudySubBrief
          image={extended.imageSubBrief}
        />

        {extended.featuredImage && <CaseStudyFeaturedImage
          name={caseStudy.name}
          image={extended.featuredImage}
        />}

        <CaseStudyHeadline
          headline={extended.headline}
          image={extended.headlineBackgroundImage}
        />

        <CaseStudyMockups
          mockups={extended.mockups}
          name={caseStudy.name}
          enableBlocks={extended.enableMockupBlocks}
        />

        <CaseStudyExternalLink
          text={extended.fullCaseStudyText}
          link={extended.fullCaseStudyLink}
        />

        <CaseStudyNext
          nextProjects={nextProjectsSample}
          navigateToProject={this.props.navigateToProject}
        />
      </section>
    );
  }
}

CaseStudyPage.propTypes = {
  retrieveFullCaseStudy: PropTypes.func.isRequired,
  navigateToProject: PropTypes.func.isRequired,
  nextProjectsSample: PropTypes.object.isRequired,
  caseStudy: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default CaseStudyPage;
