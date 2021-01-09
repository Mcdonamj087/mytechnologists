import React, { forwardRef } from 'react';
import Button from '../button/button.component';
import Image from 'gatsby-image';
import ScrollArrow from '../scroll-arrow/scroll-arrow.component';
import { Element } from 'react-scroll';

import './zeus-hero.styles.scss';

const ZeusHero = forwardRef((props, ref) => {
  return (
    <>
      <Element name={props.name} />
      <div className='mt-zeus-hero-bkg' id={props.id}>
        <Image
          fluid={props.featuredImage}
          className='mt-zeus-hero-bkg--image'
        />
        {props.overlay === true && (
          <div className='mt-zeus-hero-bkg--overlay absolute-0' />
        )}
      </div>

      <div
        className={`mt-zeus-hero-content ${
          props.overlay === true && 'white-text'
        }`}
        ref={ref}
        style={{ ...props.style }}>
        <div className='mt-zeus-hero-content--head'>
          <h1 className='headline'>{props.headline}</h1>
          <h2 className='subhead'>{props.subhead}</h2>
        </div>

        <div className='mt-zeus-hero-content--foot'>
          <div className='button-group'>
            {props.purchaseBtnText ? (
              <Button
                to={`/${props.purchaseSlug}`}
                color={props.overlay === true && 'white'}>
                {props.purchaseBtnText}
              </Button>
            ) : null}

            {props.learnBtnText ? (
              <Button
                to={'/$btn2Url'}
                color={props.overlay === true && 'white'}>
                {props.learnBtnText}
              </Button>
            ) : null}

            {!props.purchaseBtnText &&
            !props.learnBtnText &&
            props.scrollArrow ? (
              <ScrollArrow />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
});

export default ZeusHero;
