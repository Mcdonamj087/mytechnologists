import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Logo from '../../assets/svg/my-technologist-logo.inline.svg';

import './header.styles.scss';

const Header = () => (
  <header className='mt-header'>
    <Link to='/' className='mt-header--logo'>
      <Logo />
    </Link>
    <nav className='mt-header--nav'>
      <AnchorLink to='/#career-coaching'>Career Coaching</AnchorLink>
      <AnchorLink to='/#resume-writing'>Resume Writing</AnchorLink>
      <AnchorLink to='/#offer-negotiation'>Offer Negotiation</AnchorLink>
    </nav>
  </header>
);

export default Header;
