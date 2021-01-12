import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header/header.component';
import ScrollArrow from '../components/scroll-arrow/scroll-arrow.component';
import LogoMarqee from '../components/logo-marqee/logo-marqee';
import Image from 'gatsby-image';
import Block from '@sanity/block-content-to-react';

import './why-us.scss';

const WhyUs = ({ data }) => {
  const {
    seo,
    ourStoryBody,
    image1,
    image2,
    image3,
    whyChooseUsHeadline,
    whyChooseUsBody,
    logosHeadline,
    logos,
  } = data.allSanityWhyUsPage.nodes[0].whyUsPageContent;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    previewImage,
  } = seo || {};

  const truncateText = text => text.split('.').slice(0, 2).join('.');

  return (
    <Layout wrapped>
      <SEO
        title={metaTitle}
        description={metaDescription}
        previewImage={previewImage.asset.fluid.src}
        ogTitle={ogTitle || whyChooseUsHeadline}
        ogDescription={ogDescription || truncateText(whyChooseUsBody)}
        twitterTitle={twitterTitle || whyChooseUsHeadline}
        twitterDescription={twitterDescription || truncateText(whyChooseUsBody)}
        bodyClass='why-us-page'
      />
      <Header whiteBkg />
      <section className='our-story'>
        <div className='title-container'>
          <h6 className='title'>Our Story</h6>
          <ScrollArrow />
        </div>
        <div className='body-container'>
          <p className='body'>{ourStoryBody}</p>
        </div>
      </section>

      <figure className='why-us-gallery'>
        <div className='image-wrap'>
          <div className='inner'>
            <div className='absolute-0'>
              <Image fluid={image1.asset.fluid} />
            </div>
          </div>
        </div>
        <div className='image-wrap'>
          <div className='inner'>
            <div className='absolute-0'>
              <Image fluid={image2.asset.fluid} />
            </div>
          </div>
        </div>
        <div className='image-wrap'>
          <div className='inner'>
            <div className='absolute-0'>
              <Image fluid={image3.asset.fluid} />
            </div>
          </div>
        </div>
      </figure>

      <section className='why-us'>
        <div className='title-container'>
          <h6 className='title'>Why Us</h6>
        </div>
        <div className='body-container'>
          <h1 className='heading'>{whyChooseUsHeadline}</h1>
          <Block className='body' blocks={whyChooseUsBody._rawData} />
        </div>
      </section>

      <section className='attribution'>
        <div className='content'>
          <h3 className='headline'>{logosHeadline}</h3>
          <div className='logo-marqee'>
            <LogoMarqee logos={logos} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityWhyUsPage {
      nodes {
        whyUsPageContent {
          seo {
            ...SEOData
          }
          ourStoryBody
          image1 {
            asset {
              fluid(maxWidth: 360) {
                ...GatsbySanityImageFluid
              }
            }
          }
          image2 {
            asset {
              fluid(maxWidth: 360) {
                ...GatsbySanityImageFluid
              }
            }
          }
          image3 {
            asset {
              fluid(maxWidth: 360) {
                ...GatsbySanityImageFluid
              }
            }
          }
          whyChooseUsBody {
            _rawData
          }
          whyChooseUsHeadline
          logosHeadline
          logos {
            _key
            name
            image {
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default WhyUs;
