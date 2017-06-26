import React from 'react';
import PropTypes from 'prop-types';

const AboutPageSocial = ({ socialLinks, refSocial }) => (
  <div className="AboutPageSocial" ref={refSocial}>
    {socialLinks.map((item, key) => (
      <a
        href={item.link}
        key={`AboutPageSocial-${key}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
      </a>
    ))}
  </div>
);

AboutPageSocial.propTypes = {
  socialLinks: PropTypes.array.isRequired,
  refSocial: PropTypes.func.isRequired,
};

export default AboutPageSocial;
