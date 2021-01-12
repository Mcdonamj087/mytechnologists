import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header/header.component';
import Image from 'gatsby-image';
import { Tween } from 'react-gsap';

import ContentSidebar from '../components/content-sidebar/content-sidebar.component';
import Accordion from '../components/accordion/accordion';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './faq.scss';

const FAQ = ({ data }) => {
  const {
    seo,
    faqHeadline,
    faqImage,
    faqs,
  } = data.allSanityFaqPage.nodes[0].faqPageContent;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    previewImage,
  } = seo || {};

  const contactEmail = data.allSanityGeneral.nodes[0].generalSiteSettings.email;

  const tweenFrom = { y: '50', opacity: 0 };
  const tweenTo = { y: '0', opacity: 1 };
  const tweenDuration = 1.5;
  const tweenEase = 'Expo.easeOut';
  const tweenDelay = 0.15;

  return (
    <Layout wrapped>
      <SEO
        title={metaTitle || faqHeadline}
        description={metaDescription}
        previewImage={previewImage?.asset.fluid.src || faqImage.asset.fluid.src}
        ogTitle={ogTitle || faqHeadline}
        ogDescription={ogDescription}
        twitterTitle={twitterTitle || faqHeadline}
        twitterDescription={twitterDescription}
      />
      <Header whiteBkg />
      <div className='faq-page-container'>
        <ContentSidebar>
          <Tween
            from={tweenFrom}
            to={tweenTo}
            duration={tweenDuration}
            ease={tweenEase}>
            <h1 className='headline'>{faqHeadline}</h1>
          </Tween>

          <div className='accordions-wrapper'>
            {faqs.map(({ _key, question, answer }, idx) => (
              <Tween
                key={_key}
                from={tweenFrom}
                to={tweenTo}
                duration={tweenDuration}
                ease={tweenEase}
                delay={tweenDelay * (idx + 1)}>
                <div>
                  <Accordion
                    eventKey={_key}
                    question={question}
                    answer={answer}
                  />
                </div>
              </Tween>
            ))}
          </div>
          <Tween
            from={tweenFrom}
            to={tweenTo}
            duration={tweenDuration}
            ease={tweenEase}
            delay={tweenDelay * (faqs.length + 1)}>
            <p className='small'>
              Have a question that isn’t on here?{' '}
              <a href={`mailto:${contactEmail}`}>Email us directly</a> and we
              will be happy to answer your questions!
            </p>
          </Tween>
        </ContentSidebar>

        <div className='featured-image-container'>
          <Image className='featured-image' fluid={faqImage.asset.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityGeneral {
      nodes {
        generalSiteSettings {
          email
        }
      }
    }
    allSanityFaqPage {
      nodes {
        faqPageContent {
          seo {
            ...SEOData
          }
          faqHeadline
          faqImage {
            asset {
              fluid(maxWidth: 1680) {
                ...GatsbySanityImageFluid
              }
            }
          }
          faqs {
            _key
            question
            answer {
              _rawData
            }
          }
        }
      }
    }
  }
`;

export default FAQ;
