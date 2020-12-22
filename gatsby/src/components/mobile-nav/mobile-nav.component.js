import React, { useState, useLayoutEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { slugify } from '../../utils';

import './mobile-nav.styles.scss';

const MobileNav = () => {
  const { services } = useStaticQuery(graphql`
    query {
      services: allSanityServicePage {
        nodes {
          _id
          servicePageContent {
            general {
              navText
            }
          }
        }
      }
    }
  `);

  const [isOpen, toggleNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    toggleNavOpen(!isOpen);
    isOpen
      ? document.body.classList.remove('mobile-nav-is-open')
      : document.body.classList.add('mobile-nav-is-open');
  };

  return (
    <>
      <div id='mt-mobile-nav--underlay' onClick={handleHamburgerClick}></div>
      <div
        id='mt-mobile-nav--trigger'
        onClick={handleHamburgerClick}
        onKeyDown={e =>
          (e.key === 'Enter' || e.key === ' ') && handleHamburgerClick()
        }
        role='button'
        tabIndex='0'>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id='mt-mobile-nav--panel'>
        <nav>
          <Link
            className='mobile-nav-item'
            to='/'
            onClick={handleHamburgerClick}>
            Home
          </Link>

          {services.nodes.map(service => {
            const navText = service.servicePageContent.general.navText;
            const slug = slugify(navText);
            return (
              <Link
                key={service._id}
                className='mobile-nav-item'
                to={`/#${slug}`}
                onClick={handleHamburgerClick}>
                {navText}
              </Link>
            );
          })}

          <Link
            className='mobile-nav-item'
            to='/why-us/'
            onClick={handleHamburgerClick}>
            Why Us
          </Link>
          <Link
            className='mobile-nav-item'
            to='/instructors/'
            onClick={handleHamburgerClick}>
            Instructors
          </Link>
          <Link
            className='mobile-nav-item'
            to='/reviews/'
            onClick={handleHamburgerClick}>
            Reviews
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
