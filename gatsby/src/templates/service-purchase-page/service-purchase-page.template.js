import React, { useLayoutEffect, useState } from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import ContentSidebar from '../../components/content-sidebar/content-sidebar.component';
import { InlineWidget } from 'react-calendly';
import { Tween } from 'react-gsap';
import BlockContent from '@sanity/block-content-to-react';
import Button from '../../components/button/button.component';

import './service-purchase-page.styles.scss';

const ServicePurchasePage = ({ pageContext, data }) => {
  const tweenFrom = { y: '50', opacity: 0 };
  const tweenTo = { y: '0', opacity: 1 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

  const paypalBadge = data.allFile.nodes[0];

  useLayoutEffect(() => {
    document.body.classList.add('service-purchase-page');

    return () => document.body.classList.remove(`service-purchase-page`);
  }, []);

  const featuredImage =
    data.thisService.servicePageContent.homepageContent.featuredImage;

  const {
    price,
    headline,
    details,
    eventLink,
    eventLinkAlt,
  } = pageContext.pageContent;

  const primaryColorHex = pageContext.primaryBrandColor.substr(1);

  const [activeCalendar, toggleActiveCalendar] = useState(1);

  const handleEventBtnClick = btnNumber => {
    toggleActiveCalendar(btnNumber);
  };

  return (
    <Layout>
      <Header />
      <section className='service-purchase--container'>
        {/* price={price}
        title={headline}
        details={details}
        eventLinkBtns={eventLink && eventLinkAlt}
        activeCalendar={activeCalendar}
        btnClickHandler={handleEventBtnClick} */}

        <ContentSidebar>
          <div className='service-details'>
            <Tween
              from={tweenFrom}
              to={tweenTo}
              duration={tweenDuration}
              ease={tweenEase}
              delay={tweenDelay}>
              <h1 className='service-details--title'>{headline}</h1>
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

          {eventLinkAlt && (
            <Tween
              from={tweenFrom}
              to={tweenTo}
              duration={tweenDuration}
              ease={tweenEase}
              delay={tweenDelay * 3}>
              <div className='event-link-buttons'>
                <Button
                  type='button'
                  onClick={() => handleEventBtnClick(1)}
                  className={activeCalendar === 1 ? '' : 'outline'}>
                  Group 1
                </Button>
                <Button
                  type='button'
                  onClick={() => handleEventBtnClick(2)}
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
        </ContentSidebar>

        <div className='service-purchase--main'>
          <Image className='featured-image' fluid={featuredImage.asset.fluid} />

          {eventLink && activeCalendar === 1 && (
            <div className='service-purchase--calendar absolute-0'>
              <InlineWidget
                url={eventLink}
                styles={{ height: '100%' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideLandingPageDetails: true,
                  primaryColor: primaryColorHex,
                  textColor: '000000',
                }}
              />
            </div>
          )}
          {eventLinkAlt && activeCalendar === 2 && (
            <div className='service-purchase--calendar absolute-0'>
              <InlineWidget
                url={eventLinkAlt}
                styles={{ height: '100%' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideLandingPageDetails: true,
                  primaryColor: primaryColorHex,
                  textColor: '000000',
                }}
              />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export const data = graphql`
  query($id: String!) {
    thisService: sanityServicePage(_id: { eq: $id }) {
      servicePageContent {
        homepageContent {
          featuredImage {
            asset {
              fluid(maxWidth: 1680) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
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
`;

export default ServicePurchasePage;
