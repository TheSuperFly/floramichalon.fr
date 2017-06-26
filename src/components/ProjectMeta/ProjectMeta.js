import PropTypes from 'prop-types';
import React from 'react';

import BigLetterTitle from 'Components/UI/BigLetterTitle';
import UpDownTextSwap from 'Components/UI/UpDownTextSwap';
import UpDownHidder from 'Components/UI/UpDownHidder';

class ProjectMeta extends React.Component {
  handleViewCaseClick = () => {
    const slug = this.props.slug;

    this.props.navigateToProject(slug);
  };

  render() {
    const {
      name,
      shortDescription,
      year,
      inProjectPage,
    } = this.props;

    return (
      <article className="ProjectMeta">
        <div className="ProjectMeta__meta">
          <span className="ProjectMeta__year">{year}</span>
          <BigLetterTitle title={name} />
          <UpDownHidder hide={inProjectPage}>
            <button className="ProjectMeta__viewCase" onClick={this.handleViewCaseClick}>View Case</button>
          </UpDownHidder>
          <UpDownTextSwap
            className="ProjectMeta__shortDescription"
            text={shortDescription}
            method="lines"
            textWrapper="h3"
          />
        </div>
      </article>
    );
  }
}

ProjectMeta.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  shortDescription: PropTypes.string,
  year: PropTypes.string,
  inProjectPage: PropTypes.bool,
  navigateToProject: PropTypes.func,
};

ProjectMeta.defaultProps = {
  name: '',
  slug: '',
  shortDescription: '',
  year: '',
  inProjectPage: false,
  navigateToProject: false,
};

export default ProjectMeta;
