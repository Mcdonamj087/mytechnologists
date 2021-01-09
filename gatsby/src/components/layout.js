import React from 'react';
import PropTypes from 'prop-types';

import '../styles/styles.scss';

const Layout = ({ children, wrapped }) => {
  return (
    <>{wrapped ? <div className='wrapper'>{children}</div> : <>{children}</>}</>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
