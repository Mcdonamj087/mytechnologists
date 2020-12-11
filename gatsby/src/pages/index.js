import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header/header.component';
import MobileNav from '../components/mobile-nav/mobile-nav.component';
import ZeusHero from '../components/zeus-hero/zeus-hero.component';
//import SEO from '../components/seo';

import './index.styles.scss';

const IndexPage = ({ data }) => {
  const {
    homepageIntroHero__headline,
    homepageIntroHero__subhead,
    homepageIntroHero__featuredImage,
  } = data.homepage.nodes[0];

  const services = data.services.nodes;

  useEffect(() => {
    console.log('component mounted');
  }, []);

  return (
    <Layout>
      <Header />
      <MobileNav />
      <main id='homepage-scroll-wrapper'>
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
                    headline={homepageIntroHero__headline}
                    subhead={homepageIntroHero__subhead}
                    featuredImage={homepageIntroHero__featuredImage.asset.fluid}
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
                const slug = navText.toLowerCase().split(' ').join('-');
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

export const query = graphql`
  query {
    homepage: allSanityHomepage {
      nodes {
        homepageIntroHero__featuredImage {
          asset {
            fluid(maxWidth: 1680) {
              ...GatsbySanityImageFluid
            }
          }
        }
        homepageIntroHero__headline
        homepageIntroHero__subhead
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
