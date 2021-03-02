import React from 'react';
import FBIcon from '../../assets/svg/fb-icon.inline.svg';
import LIIcon from '../../assets/svg/li-icon.inline.svg';
import IGIcon from '../../assets/svg/ig-icon.inline.svg';

import './social-icons.styles.scss';

import useSocialIcons from '../../hooks/useSocalIcons';

const SocialIcons = () => {
  const { facebookUrl, linkedinUrl, instagramUrl } = useSocialIcons();

  return (
    <div className='social-icons__wrapper'>
      {facebookUrl && (
        <a
          href={facebookUrl}
          target='_blank'
          rel='noreferrer'
          className='social-icon__link'>
          <FBIcon />
        </a>
      )}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target='_blank'
          rel='noreferrer'
          className='social-icon__link'>
          <LIIcon />
        </a>
      )}
      {instagramUrl && (
        <a
          href={instagramUrl}
          target='_blank'
          rel='noreferrer'
          className='social-icon__link'>
          <IGIcon />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
