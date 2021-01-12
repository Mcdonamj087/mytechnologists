import React from 'react';
import './logo-marqee.scss';
import Image from 'gatsby-image';

const LogoMarqee = ({ logos }) => {
  const doubleLogoArray = [...logos].concat(logos);

  return (
    <div className='logo-marqee-wrapper'>
      <div className='marqee-container'>
        {doubleLogoArray.map(({ _key, image, name }, idx, arr) => {
          const key = idx > arr.length / 2 - 1 ? `${_key}2` : _key;
          return (
            <div key={key} className='marqee-item'>
              <Image
                className='logo'
                fluid={image.asset.fluid}
                imgStyle={{
                  objectFit: 'scale-down',
                }}
                alt={name}
              />
            </div>
          );
        })}
      </div>

      {/* <div className="marqee-container">
        {logos.map(logo => (
          <Image fluid={logo.image.asset.fluid} alt={logo.name} />
        ))}
      </div> */}
    </div>
  );
};

export default LogoMarqee;
