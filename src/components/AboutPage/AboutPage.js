import React from 'react';
import PropTypes from 'prop-types';

import AboutPageBiography from 'Components/AboutPageBiography/AboutPageBiography';
import AboutPageSocial from 'Components/AboutPageSocial/AboutPageSocial';

import AnimationHelper from 'Utils/AnimationHelper';
import AboutHelper from 'Utils/AboutHelper';

class AboutPage extends React.Component {
  componentDidMount() {
    this.props.changeThemeToDark();
    this.props.hideFooter();

    AnimationHelper.aboutPageEntrance(
      this.$Biography.children,
      this.$BigLetter,
      this.$BiographyCTA,
      this.$Social.children,
      this.$Credits,
    );
  }

  render() {
    return (
      <section className="AboutPage">
        <div className="AboutPage__inner">
          <AboutPageBiography
            biography={AboutHelper.getBiography()}
            email={AboutHelper.getEmailAdress()}
            resumeePath={AboutHelper.getResumeePath()}
            refBiography={c => (this.$Biography = c)}
            refBigLetter={c => (this.$BigLetter = c)}
            refCTA={c => (this.$BiographyCTA = c)}
          />
          <AboutPageSocial
            socialLinks={AboutHelper.getSocialLinks()}
            refSocial={c => (this.$Social = c)}
          />
          <p className="AboutPageCredits" ref={c => (this.$Credits = c)}>
            Code by <a href="http://zachary.pm/" target="_blank" rel="noopener noreferrer">Zachary Dahan</a>
          </p>
        </div>
      </section>
    );
  }
}

AboutPage.propTypes = {
  changeThemeToDark: PropTypes.func.isRequired,
  hideFooter: PropTypes.func.isRequired,
};

export default AboutPage;
