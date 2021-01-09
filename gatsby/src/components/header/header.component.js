import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { slugify } from '../../utils';

import Logo from '../../assets/svg/my-technologist-logo.inline.svg';
import MobileNav from '../../components/mobile-nav/mobile-nav.component';

import './header.styles.scss';

const Header = ({ inverted, whiteBkg }) => {
  const { services } = useStaticQuery(graphql`
    query {
      services: allSanityServicePage {
        nodes {
          _id
          servicePageContent {
            general {
              navText
              order
            }
          }
        }
      }
    }
  `);

  return (
    <header
      className={`mt-header ${inverted ? 'inverted' : ''} ${
        whiteBkg ? 'white-bkg' : ''
      }`}>
      <Link to='/' className='mt-header--logo'>
        <Logo />
      </Link>
      <nav className='mt-header--nav'>
        {services.nodes
          .sort((a, b) =>
            a.servicePageContent.general.order >
            b.servicePageContent.general.order
              ? 1
              : -1
          )
          .map(service => {
            const navText = service.servicePageContent.general.navText;
            const slug = slugify(navText);
            return (
              <Link key={service._id} to={`/#${slug}`}>
                {navText}
              </Link>
            );
          })}
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
