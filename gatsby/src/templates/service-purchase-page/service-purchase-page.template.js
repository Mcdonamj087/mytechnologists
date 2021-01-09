import React, { useLayoutEffect, useState } from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import ServicePurchaseSidebar from '../../components/service-purchase-sidebar/service-purchase-sidebar.component';
import { InlineWidget } from 'react-calendly';

import './service-purchase-page.styles.scss';

const ServicePurchasePage = ({ pageContext, data }) => {
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
        <ServicePurchaseSidebar
          price={price}
          title={headline}
          details={details}
          eventLinkBtns={eventLink && eventLinkAlt}
          activeCalendar={activeCalendar}
          btnClickHandler={handleEventBtnClick}
        />
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
  }
`;

export default ServicePurchasePage;
