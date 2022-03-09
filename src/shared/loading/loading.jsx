import React from 'react';
import LoaderImg from './../../assets/loading-buffering.gif';

export const Loading = React.memo(() => {
  return (
    <div className="center-aligned">
      <img className="loader" src={LoaderImg} alt="loading content" />
    </div>
  )
})
