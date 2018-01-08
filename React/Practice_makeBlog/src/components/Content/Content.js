import React from 'react';
import './Content.scss';

const Content = ({component}) => {
  return (
    <article>
      <div className="wrap_content">
        {component}
      </div>
    </article>
  )
};

export default Content;