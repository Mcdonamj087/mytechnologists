import React, { useLayoutEffect } from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
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

  const { price, headline, details, eventLink } = pageContext.pageContent;
  const primaryColorHex = pageContext.primaryBrandColor.substr(1);

  return (
    <Layout>
      <main className='service-purchase--main'>
        <ServicePurchaseSidebar
          price={price}
          title={headline}
          details={details}
        />
        <BackgroundImage
          className='service-purchase--calendar'
          fluid={featuredImage.asset.fluid}>
          {eventLink && (
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
          )}
        </BackgroundImage>
      </main>
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
