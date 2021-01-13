import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { slugify } from '../../utils';

import './mobile-nav.styles.scss';

const MobileNav = () => {
  const { services, general } = useStaticQuery(graphql`
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
      general: allSanityGeneral {
        nodes {
          generalSiteSettings {
            email
          }
        }
      }
    }
  `);
  const email = general.nodes[0].generalSiteSettings.email;

  const [isOpen, toggleNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    toggleNavOpen(!isOpen);
    isOpen
      ? document.body.classList.remove('mobile-nav-is-open')
      : document.body.classList.add('mobile-nav-is-open');
  };

  return (
    <>
      <div
        id='mt-mobile-nav--underlay'
        role='button'
        tabIndex='-1'
        aria-label='underlay'
        onKeyDown={e =>
          (e.key === 'Enter' || e.key === ' ') && handleHamburgerClick()
        }
        onClick={handleHamburgerClick}></div>
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
            to='/faq/'
            onClick={handleHamburgerClick}>
            FAQ
          </Link>
          <a className='mobile-nav-item' href={`mailto:${email}`}>
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
