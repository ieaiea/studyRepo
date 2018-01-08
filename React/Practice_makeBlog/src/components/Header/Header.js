import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="wrap_header">
        <div className="header_logo">
          <Link to="/">Gugugaga</Link>
        </div>
        <span href="javascript:;" className="header_toggle"><span></span></span>
      </div>
    </header>
  )
};

export default Header;