import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header.component';
import MobileNav from './mobile-nav/mobile-nav.component';

import '../styles/styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileNav />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
