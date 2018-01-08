import React from 'react';
import './PageNation.scss';

const PageNation = ({data}) => {
  const pageView = data.map((item, idx) => (
    <button className="btn_page" key={idx}>{idx+1}</button>
  ));
  return (
    <div className="list_page">
      {pageView}
    </div>
  )
};

export default PageNation;