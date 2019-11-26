import React from 'react';
import { Link } from 'react-router-dom';
import { appPage } from 'src/pages';

import logo from 'src/themes/images/logo.png';
import './style.less';

const Logo = () => (
  <div className="Logo">
    <Link to={appPage.path}>
      <img src={logo} alt="React MobX Logo" />
    </Link>
  </div>
);

export default Logo;
