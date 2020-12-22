import React from 'react';
import './instructor-plank.styles.scss';
import Image from 'gatsby-image';

const InstructorPlank = props => {
  return (
    <div
      className={`instructor-group ${props.active === true ? 'active' : ''}`}>
      <div className='instructor-blocks-wrapper'>
        <div className='instructor-column'>
          <div className='inner-wrap image-block-wrap'>
            <div className='absolute-0 image-block'>
              <Image
                fluid={props.headshot.asset.fluid}
                alt={props.name}
                className='image'
              />
            </div>
          </div>
        </div>
        <div className='instructor-column color'>
          <div className='inner-wrap color-block-wrap'>
            <div
              className='absolute-0 color-block'
              style={{ backgroundColor: props.color }}>
              <p>{props.name}</p>
            </div>
          </div>
        </div>
      </div>
      <p className='instructor-background-blurb'>{props.bio}</p>
    </div>
  );
};

export default InstructorPlank;
