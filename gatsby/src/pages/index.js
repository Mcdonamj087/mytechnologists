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
  } = seo;

  const homepageOverlay =
    data.general.nodes[0].generalSiteSettings.homepageOverlay;

  console.log(homepageOverlay);

  const homepageScrollWrapper = useRef();

  useLayoutEffect(() => {
    disableBodyScroll(homepageScrollWrapper.current);

    return () => {
      enableBodyScroll(homepageScrollWrapper.current);
    };
  }, []);

  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDescription}
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
                  purchasePageContent: {
                    slug: { current: purchaseSlug },
                  },
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
                            purchaseSlug={purchaseSlug}
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
