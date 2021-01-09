import React from 'react';
import { Tween } from 'react-gsap';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import Button from '../button/button.component';

import './service-purchase-sidebar.styles.scss';

const ServicePurchaseSidebar = ({
  title,
  details,
  price,
  eventLinkBtns,
  activeCalendar,
  btnClickHandler,
}) => {
  const tweenFrom = { y: '50', opacity: 0 };
  const tweenTo = { y: '0', opacity: 1 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "secured_by_pp.png" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const paypalBadge = allFile.nodes[0];

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

      {eventLinkBtns && (
        <Tween
          from={tweenFrom}
          to={tweenTo}
          duration={tweenDuration}
          ease={tweenEase}
          delay={tweenDelay * 3}>
          <div className='event-link-buttons'>
            <Button
              type='button'
              onClick={() => btnClickHandler(1)}
              className={activeCalendar === 1 ? '' : 'outline'}>
              Group 1
            </Button>
            <Button
              type='button'
              onClick={() => btnClickHandler(2)}
              className={activeCalendar === 2 ? '' : 'outline'}>
              Group 2
            </Button>
          </div>
        </Tween>
      )}

      <div className='foot'>
        <Image
          className='paypal-badge'
          fluid={paypalBadge.childImageSharp.fluid}
        />
      </div>
    </div>
  );
};

export default ServicePurchaseSidebar;
