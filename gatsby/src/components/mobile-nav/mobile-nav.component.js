import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

import './mobile-nav.styles.scss';

const MobileNav = () => {
  const mobileNavTrigger = useRef();

  useLayoutEffect(() => {
    function handleNavTriggerClick(e) {
      const target = e.target;
      if (
        ['mt-mobile-nav--trigger', 'mt-mobile-nav--underlay'].includes(
          target.id
        )
      ) {
        // Lock the body from scrolling if mobile nav is open
        if (document.body.classList.contains('mobile-nav-is-open')) {
          enableBodyScroll(mobileNavTrigger.current);
        } else {
          disableBodyScroll(mobileNavTrigger.current);
        }
        document.body.classList.toggle('mobile-nav-is-open');
      }
    }
    window.addEventListener('click', handleNavTriggerClick);

    return () => {
      window.removeEventListener('click', handleNavTriggerClick);
    };
  }, []);

  return (
    <>
      <div id='mt-mobile-nav--underlay'></div>
      <div id='mt-mobile-nav--trigger' ref={mobileNavTrigger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id='mt-mobile-nav--panel'>
        <nav>
          <Link className='mobile-nav-item' to='/why-us/'>
            Why Us
          </Link>
          <Link className='mobile-nav-item' to='/instructors/'>
            Instructors
          </Link>
          <Link className='mobile-nav-item' to='/reviews/'>
            Reviews
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
