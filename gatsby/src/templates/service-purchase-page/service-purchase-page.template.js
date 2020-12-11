import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import MobileNav from '../../components/mobile-nav/mobile-nav.component';
import ServicePurchaseSidebar from '../../components/service-purchase-sidebar/service-purchase-sidebar.component';
import { InlineWidget } from 'react-calendly';

import './service-purchase-page.styles.scss';

const ServicePurchasePage = ({ pageContext: { pageContent } }) => {
  console.log(pageContent);

  const { price, headline, subhead, eventLink } = pageContent;

  return (
    <Layout>
      <Header />
      <MobileNav />
      <main className='service-purchase--main'>
        <ServicePurchaseSidebar
          price={price}
          title={headline}
          description={subhead}
        />
        <div className='service-purchase--calendar'>
          {eventLink && (
            <InlineWidget
              url={eventLink}
              styles={{ height: '100%' }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideLandingPageDetails: true,
                primaryColor: '00a2ff',
                textColor: '000000',
              }}
            />
          )}
        </div>
      </main>
    </Layout>
  );
};

export default ServicePurchasePage;
