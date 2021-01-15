import React from 'react';
import Layout from '../../components/layout';
import Header from '../../components/header/header.component';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import ScrollArrow from '../../components/scroll-arrow/scroll-arrow.component';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../../components/seo';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Button from '../../components/button/button.component';

import './service-learn-page.styles.scss';

const ServiceAboutPage = ({ data, pageContext, path }) => {
  const tweenFrom = { y: '50', opacity: 0 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

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

  const breakpoints = useBreakpoint();

  return (
    <Layout wrapped>
      <SEO
        bodyClass='service-learn-page'
        metaTitle={metaTitle || heroHeadline}
        metaDescription={metaDescription}
        previewImage={
          previewImage?.asset.fluid.src || heroImage?.asset.fluid.src
        }
        ogTitle={ogTitle || heroHeadline}
        ogDescription={ogDescription || heroSubtext}
        twitterTitle={twitterTitle || heroHeadline}
        twitterDescription={twitterDescription || heroSubtext}
      />

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
            triggerElement='.what-to-expect'
            triggerHook='onEnter'>
            {progress => {
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
            triggerElement='.convert'
            triggerHook='onEnter'>
            {progress => {
              return (
                <Tween
                  from={{
                    opacity: breakpoints.sm ? 1 : 0,
                  }}
                  ease='Power1.easeInOut'
                  progress={progress}
                  paused>
                  <section className='convert'>
                    <div className='content'>
                      <h3 className='headline'>Ready To Win Your Dream Job?</h3>
                      <Button to={`${path}/purchase`}>Purchase Now</Button>
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
