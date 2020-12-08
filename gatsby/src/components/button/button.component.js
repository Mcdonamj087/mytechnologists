import React from 'react';
import { Link } from 'gatsby';
import './button.styles.scss';

const Button = props =>
  props.type === 'button' ? (
    <button className='btn'>{props.children}</button>
  ) : (
    <Link to={props.to} className='btn'>
      {props.children}
    </Link>
  );

Button.defaultProps = {
  type: 'link',
};

export default Button;
