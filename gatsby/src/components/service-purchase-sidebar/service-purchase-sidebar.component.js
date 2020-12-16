import React from 'react';
import { Tween } from 'react-gsap';
import BlockContent from '@sanity/block-content-to-react';

import './service-purchase-sidebar.styles.scss';

const ServicePurchaseSidebar = ({ title, details, price }) => {
  const tweenFrom = { y: '50', opacity: 0 };
  const tweenTo = { y: '0', opacity: 1 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

  return (
    <div className='service-purchase-sidebar'>
      <div className='service-details'>
        <Tween
          from={tweenFrom}
          to={tweenTo}
          duration={tweenDuration}
          ease={tweenEase}
          delay={tweenDelay}>
          <h1 className='service-details--title'>{title}</h1>
        </Tween>
        <Tween
          from={tweenFrom}
          to={tweenTo}
          duration={tweenDuration}
          ease={tweenEase}
          delay={tweenDelay * 2}>
          <div className='service-details--details'>
            <BlockContent
              blocks={details._rawData}
              renderContainerOnSingleChild={true}
            />
          </div>
        </Tween>
        <Tween
          from={tweenFrom}
          to={tweenTo}
          duration={tweenDuration}
          ease={tweenEase}>
          <h3 className='service-details--price'>{`$${price}`}</h3>
        </Tween>
      </div>

      <div className='foot'>Paypal pay badge</div>
    </div>
  );
};

export default ServicePurchaseSidebar;
