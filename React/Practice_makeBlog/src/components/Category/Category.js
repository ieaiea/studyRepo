import React from 'react';
import './Category.scss';
import {Link} from 'react-router-dom';

const Category = () => {
  return (
    <div className="wrap_category">
      <h2 className="title_category">Category</h2>
      <ul className="list_category">
        <li><Link to="/Javascript">JavaScript</Link></li>
        <li><Link to="/React">React.js</Link></li>
        <li><Link to="/Node">Node.js</Link></li>
        <li><Link to="/Etc">Etc..</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
    </div>
  )
};

export default Category;