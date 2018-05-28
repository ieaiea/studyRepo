import React from 'react';
import {Link} from 'react-router-dom';

const Navigator = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/join">Join</Link></li>
    </ul>
  </div>
)

export default Navigator;