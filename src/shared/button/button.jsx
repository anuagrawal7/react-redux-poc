import React from 'react';
import './button.scss';

export const Button = React.memo(({ classList, onClick, children }) => {
  return <button className={'cursor button ' + classList} onClick={onClick} type="button">
    {children}
  </button>
})