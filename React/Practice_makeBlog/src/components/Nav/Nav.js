import React from 'react';
import './Nav.scss';
import Login from '../Login/Login';
import Category from '../Category/Category';

const Nav = () => {
  return (
    <aside>
      <div className="wrap_nav">
        <Login/>
        <Category/>
      </div>
    </aside>
  )
};

export default Nav;