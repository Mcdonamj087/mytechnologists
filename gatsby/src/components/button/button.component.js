import React from 'react';
import { Link } from 'gatsby';
import './button.styles.scss';

const Button = props => {
  const className = `btn ${props.color === 'white' && 'white'}`;
  return props.type === 'button' ? (
    <button className={className}>{props.children}</button>
  ) : (
    <Link to={props.to} className={className}>
      {props.children}
    </Link>
  );
};

Button.defaultProps = {
  type: 'link',
};

export default Button;
