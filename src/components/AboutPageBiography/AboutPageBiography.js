import React from 'react';
import PropTypes from 'prop-types';

import BigLetterTitle from 'Components/UI/BigLetterTitle';
import Lettering from "Components/Lettering/Lettering";

const AboutPageBiography = props => (
  <div className="AboutPageBiography">
    <Lettering
      text={props.biography}
      method="words"
      wrapper="p"
      refContainer={props.refBiography}
      className="AboutPageBiography__biography"
    />
    <BigLetterTitle
      className="AboutPageBiography__bigLetter"
      firstLetterToExtract="F"
      refContainer={props.refBigLetter}
    />
    <div className="AboutPageBiography__cta" ref={props.refCTA}>
      <a href={`mailto:${props.email}`} className="button">Contact Me</a>
      <a href={props.resumeePath} className="button">Resumee</a>
    </div>
  </div>
);

AboutPageBiography.propTypes = {
  biography: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  resumeePath: PropTypes.string.isRequired,
  refBiography: PropTypes.func.isRequired,
  refBigLetter: PropTypes.func.isRequired,
  refCTA: PropTypes.func.isRequired,
};

export default AboutPageBiography;
