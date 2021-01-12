import React, { useLayoutEffect, useState } from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import ScrollArrow from '../../components/scroll-arrow/scroll-arrow.component';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../../components/seo';

import './service-learn-page.styles.scss';

const ServiceAboutPage = ({ data, pageContext, path }) => {
  const tweenFrom = { y: '50', opacity: 0 };
  const tweenTo = { y: '0', opacity: 1 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

  console.log(data, pageContext);

  const {
    heroHeadline,
    heroSubtext,
    whatToExpectBody,
    whatToExpectHeadline,
    seo,
  } = pageContext.pageContent;

  const {
    heroImage,
    whatToExpectImage,
  } = data.thisService.servicePageContent.learnPageContent;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    previewImage,
    twitterTitle,
    twitterDescription,
  } = seo || {};

  return (
    <Layout wrapped>
      <SEO bodyClass='service-learn-page' />
      <Header whiteBkg />
      <div className='service-learn-wrapper'>
        <Controller container='.service-learn-wrapper'>
          <section className='hero'>
            <div className='content'>
              <Tween
                from={tweenFrom}
                duration={tweenDuration}
                stagger={tweenDelay}
                ease={tweenEase}>
                <h6 className='service-title'>{pageContext.serviceName}</h6>
                <h1 className='headline'>{heroHeadline}</h1>
                <p className='subtext'>{heroSubtext}</p>
              </Tween>
            </div>
            <Tween
              from={tweenFrom}
              stagger={tweenDelay}
              ease={tweenEase}
              duration={tweenDuration}
              delay={tweenDelay * 3}>
              <div className='featured-image-wrapper'>
                <Image className='image' fluid={heroImage?.asset.fluid} />
                <ScrollArrow />
              </div>
            </Tween>
          </section>

          <Scene
            duration={() => window.innerHeight - 55}
            indicators={false}
            triggerHook='onLeave'>
            {progress => {
              console.log(progress);
              return (
                <Tween
                  from={{
                    opacity: 0,
                  }}
                  ease='Power1.easeInOut'
                  progress={progress}
                  paused>
                  <section className='what-to-expect'>
                    <div className='content-container'>
                      <div className='inner'>
                        <h1 className='headline'>{whatToExpectHeadline}</h1>
                        <BlockContent
                          className='block-content'
                          blocks={whatToExpectBody?._rawData}
                        />
                      </div>
                    </div>
                    <div className='image-container'>
                      <Image
                        className='image'
                        fluid={whatToExpectImage?.asset.fluid}
                      />
                    </div>
                  </section>
                </Tween>
              );
            }}
          </Scene>

          <Scene
            duration={() => window.innerHeight - 55}
            indicators={false}
            triggerElement={`.convert`}
            triggerHook='onEnter'>
            {progress => {
              console.log(progress);
              return (
                <Tween
                  from={{
                    opacity: 0,
                  }}
                  ease='Power1.easeInOut'
                  progress={progress}
                  paused>
                  <section className='convert'>
                    <div className='content'>
                      <h6 className='eyebrow'>Ready To Win Your Dream Job?</h6>
                      <Link className='purchase-link' to={`${path}/purchase`}>
                        {'Sign Up For Interview Coaching'
                          .split(' ')
                          .map(word => (
                            <span>{`${word}`}&nbsp;</span>
                          ))}
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </section>
                </Tween>
              );
            }}
          </Scene>
        </Controller>
      </div>
    </Layout>
  );
};

// export const data = graphql`
//   query($id: String!) {
//     thisService: sanityServicePage(_id: { eq: $id }) {
//       servicePageContent {
//         homepageContent {
//           featuredImage {
//             asset {
//               fluid(maxWidth: 1680) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//     }
//     allFile(filter: { relativePath: { eq: "secured_by_pp.png" } }) {
//       nodes {
//         childImageSharp {
//           fluid(maxWidth: 400) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query($id: String!) {
    thisService: sanityServicePage(_id: { eq: $id }) {
      servicePageContent {
        learnPageContent {
          heroImage {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          whatToExpectImage {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default ServiceAboutPage;
