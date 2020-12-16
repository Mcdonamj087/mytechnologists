import React, { forwardRef } from 'react';
import Button from '../button/button.component';
import BackgroundImage from 'gatsby-background-image';
import ScrollArrow from '../scroll-arrow/scroll-arrow.component';
import { Element } from 'react-scroll';

import './zeus-hero.styles.scss';

const ZeusHero = forwardRef((props, ref) => {
  return (
    <>
      <Element name={props.name} />
      <BackgroundImage
        className='mt-zeus-hero-bkg'
        id={props.id}
        fluid={props.featuredImage}
        style={
          props.bkgColor
            ? { backgroundColor: `${props.bkgColor}` }
            : props.style
        }
        order={props.order}
      />

      <div
        className='mt-zeus-hero-content'
        ref={ref}
        style={{ ...props.style }}
        order={props.order}>
        <div className='mt-zeus-hero-content--head'>
          <h1 className='headline'>{props.headline}</h1>
          <h2 className='subhead'>{props.subhead}</h2>
        </div>

        <div className='mt-zeus-hero-content--foot'>
          <div className='button-group'>
            {props.purchaseBtnText ? (
              <Button className='btn' to={`/${props.purchaseSlug}`}>
                {props.purchaseBtnText}
              </Button>
            ) : null}

            {props.learnBtnText ? (
              <Button className='btn' to={'/$btn2Url'}>
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
