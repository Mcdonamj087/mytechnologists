import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import MobileNav from '../../components/mobile-nav/mobile-nav.component';
import ServicePurchaseSidebar from '../../components/service-purchase-sidebar/service-purchase-sidebar.component';

import './service-purchase-page.styles.scss';

const ServicePurchasePage = ({ pageContext: { pageContent } }) => {
  console.log(pageContent);

  const { headline, subhead } = pageContent;

  return (
    <Layout>
      <Header />
      <MobileNav />
      <main className='service-purchase--main'>
        <ServicePurchaseSidebar title={headline} description={subhead} />
      </main>
    </Layout>
  );
};

export default ServicePurchasePage;
