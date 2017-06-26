import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLeft = () => (
  <div className="HeaderLeft">
    <Link to="/">
      <svg className="icon icon-logo">
        <use xlinkHref="/assets/img/logo.svg#logo" />
      </svg>
      <h1 className="HeaderLeft__name">Flora Michalon</h1>
    </Link>
  </div>
);

export default HeaderLeft;
