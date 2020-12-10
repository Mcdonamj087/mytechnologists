import React from 'react';
import { Link, useStaticQuery } from 'gatsby';

import Logo from '../../assets/svg/my-technologist-logo.inline.svg';

import './header.styles.scss';

const Header = () => {
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
    <header className='mt-header'>
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
            const slug = navText.toLowerCase().split(' ').join('-');
            return (
              <Link key={service._id} to={`/#${slug}`}>
                {navText}
              </Link>
            );
          })}
      </nav>
    </header>
  );
};

export default Header;
