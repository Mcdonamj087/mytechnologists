import React from 'react';
import './scroll-arrow-styles.scss';

const ScrollArrow = ({ className }) => (
  <div className={`${className ? className : ''} scroll-arrow`}>
    <span />
    <span />
    <span />
  </div>
);

export default ScrollArrow;
