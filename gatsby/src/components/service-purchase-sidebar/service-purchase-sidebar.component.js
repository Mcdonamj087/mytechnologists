import React from 'react';

import './service-purchase-sidebar.styles.scss';

const ServicePurchaseSidebar = ({ title, description }) => {
  return (
    <div className='service-purchase-sidebar'>
      <div className='service-details'>
        <h1 className='service-details--title'>{title}</h1>
        <h2 className='service-details--description'>{description}</h2>
        <ul className='service-details--info'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Sed mollis eros</li>
          <li>Quisque libero metus condimentum</li>
          <li>Suspendisse non nisl sit amet</li>
        </ul>
        <h3 className='service-details--price'>$299.99</h3>
      </div>

      <div className='foot'>Paypal pay badge</div>
    </div>
  );
};

export default ServicePurchaseSidebar;
