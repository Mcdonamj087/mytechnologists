import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { graphql } from 'gatsby';

import DATA from './data';

import Layout from '../components/layout';
import Header from '../components/header/header.component';
import MobileNav from '../components/mobile-nav/mobile-nav.component';
import ZeusHero from '../components/zeus-hero/zeus-hero.component';
//import SEO from '../components/seo';

import './index.styles.scss';

const IndexPage = query => {
  const {
    homepageIntroHero__headline,
    homepageIntroHero__subhead,
    homepageIntroHero__featuredImage,
    homepageServices,
  } = query.data.allSanityHomepage.nodes[0];

  console.log(homepageIntroHero__headline);

  console.log(Object.values(homepageServices));
  return (
    <Layout>
      <Header />
      <MobileNav />
      <main className='homepage-scroll-wrapper'>
        <Controller container='.homepage-scroll-wrapper'>
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

          {Object.values(homepageServices)
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map(({ bkgColor, featuredImage, ...props }, idx) => (
              <Scene
                key={idx}
                duration={() => window.innerHeight}
                indicators={false}
                triggerElement={`#trigger${idx + 1}`}>
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
                        id={`trigger${idx + 1}`}
                        style={{ opacity: '0' }}
                        featuredImage={featuredImage.asset.fluid}
                        {...props}
                      />
                    </Tween>
                  );
                }}
              </Scene>
            ))}
        </Controller>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityHomepage {
      nodes {
        homepageIntroHero__featuredImage {
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
        homepageIntroHero__headline
        homepageIntroHero__subhead
        homepageServices {
          careerCoaching__content {
            headline
            subhead
            learnBtnText
            purchaseBtnText
            featuredImage {
              asset {
                fluid(maxWidth: 1440) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            order
          }
          offerNegotiation__content {
            headline
            subhead
            learnBtnText
            purchaseBtnText
            featuredImage {
              asset {
                fluid(maxWidth: 1440) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            order
          }
          resumeWriting__content {
            headline
            subhead
            learnBtnText
            purchaseBtnText
            featuredImage {
              asset {
                fluid(maxWidth: 1440) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            order
          }
        }
      }
    }
  }
`;

export default IndexPage;
