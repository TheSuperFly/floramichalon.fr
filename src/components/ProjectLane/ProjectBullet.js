import React from 'react';
import PropTypes from 'prop-types';

const ProjectBullet = ({ id, name, active, onClick }) => {
  const onClickAction = () => {
    onClick(id);
  };

  return (
    <div className="ProjectBullet" onClick={onClickAction}>
      <a className={`ProjectBullet__number ${active ? 'active' : ''}`} title={name}>{`0${id + 1}`}</a>
      <span className="ProjectBullet__bullet">•</span>
      <span className="ProjectBullet__bullet">•</span>
    </div>
  );
};

ProjectBullet.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  active: PropTypes.bool,
};

ProjectBullet.defaultProps = {
  id: 0,
  name: '',
  active: false,
  onClick: false,
};

export default ProjectBullet;
