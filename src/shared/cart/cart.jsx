import React from 'react';
import './cart.scss';

export const CartDisplay = React.memo(props => {
  return <div className='cart-column box-effect'>{props.children}</div>
})