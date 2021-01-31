import React, { useRef, useLayoutEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Tween } from 'react-gsap';
import { graphql } from 'gatsby';
import { slugify } from '../utils';

import Layout from '../components/layout';
import ZeusHero from '../components/zeus-hero/zeus-hero.component';
import Header from '../components/header/header.component';
import SEO from '../components/seo';

import './index.styles.scss';

const IndexPage = ({ data }) => {
  const {
    headline,
    subhead,
    featuredImage,
    seo,
  } = data.homepage.nodes[0].homepageContent;

  const services = data.services.nodes;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    previewImage,
    twitterTitle,
    twitterDescription,
  } = seo || {};

  const homepageOverlay =
    data.general.nodes[0].generalSiteSettings.homepageOverlay;

  const homepageScrollWrapper = useRef();

  let serviceBlockCheckPoints = handleResize();

  // Adding a window resize handler to create a new array of
  // section breakpoints which the scroll handler will use
  // to determine which service block is in view.
  function handleResize() {
    if (typeof window === 'undefined') {
      return false;
    }

    serviceBlockCheckPoints = services.map(
      (service, idx) => window.innerHeight * (idx + 1)
    );
    return serviceBlockCheckPoints;
  }

  // A scroll handler to update the url fragment based on which
  // service block is in view
  function handleScroll(e) {
    if (typeof window === 'undefined') {
      return false;
    }
    const scrollDistance = e.target.scrollTop;

    if (serviceBlockCheckPoints.indexOf(scrollDistance) >= 0) {
      const scrollIndex = serviceBlockCheckPoints.indexOf(scrollDistance);
      const hash = slugify(
        services[scrollIndex].servicePageContent.general.navText
      );
      window.location.hash = hash;
    }
  }

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    disableBodyScroll(homepageScrollWrapper.current);
    homepageScrollWrapper.current.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      enableBodyScroll(homepageScrollWrapper.current);
      homepageScrollWrapper.current.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <SEO
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        previewImage={
          previewImage?.asset.fluid.src || featuredImage?.asset.fluid.src
        }
        ogTitle={ogTitle || headline}
        ogDescription={ogDescription || subhead}
        twitterTitle={twitterTitle || headline}
        twitterDescription={twitterDescription || subhead}
      />

      <Header inverted={homepageOverlay} />

      <main id='homepage-scroll-wrapper' ref={homepageScrollWrapper}>
        <Controller container='#homepage-scroll-wrapper'>
          {/**************************************************
           Homepage Top Section
           **************************************************/}
          <Scene
            duration={() => window.innerHeight / 2}
            indicators={false}
            triggerElement='#trigger0'
            triggerHook='onLeave'>
            {progress => {
              //console.log(progress);
              return (
                <Tween
                  to={{
                    opacity: 0,
                  }}
                  ease='Power1.easeInOut'
                  progress={progress}
                  paused>
                  <ZeusHero
                    id='trigger0'
                    headline={headline}
                    subhead={subhead}
                    featuredImage={featuredImage.asset.fluid}
                    overlay={homepageOverlay}
                    scrollArrow
                  />
                </Tween>
              );
            }}
          </Scene>

          {/**************************************************
           Loop through service planks
           **************************************************/}
          {services
            .sort((a, b) =>
              a.servicePageContent.general.order >
              b.servicePageContent.general.order
                ? 1
                : -1
            )
            .map(
              ({
                id,
                servicePageContent: {
                  general: { navText },
                  homepageContent: { featuredImage, ...props },
                },
              }) => {
                const slug = slugify(navText);
                return (
                  <Scene
                    key={id}
                    duration={() => window.innerHeight}
                    indicators={false}
                    triggerElement={`#${slug}`}>
                    {progress => {
                      // Make the progress value reverse after halfway point
                      const modProg =
                        progress < 0.5 ? progress * 2 : (1 - progress) * 2;

                      return (
                        <Tween
                          to={{
                            opacity: 1,
                          }}
                          ease='Power1.easeInOut'
                          progress={modProg}
                          paused>
                          <ZeusHero
                            id={slug}
                            name={slug}
                            style={{ opacity: '0' }}
                            featuredImage={featuredImage.asset.fluid}
                            overlay={homepageOverlay}
                            purchaseSlug={`${slugify(navText)}/purchase`}
                            learnSlug={slugify(navText)}
                            {...props}
                          />
                        </Tween>
                      );
                    }}
                  </Scene>
                );
              }
            )}
        </Controller>
      </main>
    </Layout>
  );
};

// TODO: Move SEO query to external staticQuery

export const seoFragment = graphql`
  fragment SEOData on SanitySeoObject {
    metaTitle
    metaDescription
    previewImage {
      asset {
        fluid(maxWidth: 1440) {
          src
        }
      }
    }
    ogTitle
    ogDescription
    twitterTitle
    twitterDescription
  }
`;

export const query = graphql`
  query {
    general: allSanityGeneral {
      nodes {
        generalSiteSettings {
          homepageOverlay
        }
      }
    }
    homepage: allSanityHomepage {
      nodes {
        homepageContent {
          headline
          subhead
          featuredImage {
            asset {
              fluid(maxWidth: 1680) {
                ...GatsbySanityImageFluid
              }
            }
          }
          seo {
            ...SEOData
          }
        }
      }
    }
    services: allSanityServicePage {
      nodes {
        id
        servicePageContent {
          general {
            navText
            order
          }
          homepageContent {
            headline
            subhead
            featuredImage {
              asset {
                fluid(maxWidth: 1680) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            purchaseBtnText
            learnBtnText
          }
          purchasePageContent {
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
