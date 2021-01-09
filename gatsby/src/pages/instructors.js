import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header/header.component';
import Arrow from '../assets/svg/arrow.inline.svg';
import InstructorPlank from '../components/instructor-plank/instructor-plank.component';
import SEO from '../components/seo';

import './instructors.styles.scss';

const Instructors = ({ data }) => {
  const {
    headline,
    subhead,
    instructors,
    seo,
  } = data.allSanityInstructorsPage.nodes[0].instructorsPageContent;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    previewImage,
  } = seo;

  const [activeInstructor, updateActiveInstructor] = useState(
    instructors[0].name
  );

  return (
    <Layout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        previewImage={previewImage.asset.fluid.src}
        ogTitle={ogTitle || headline}
        ogDescription={ogDescription || subhead}
        twitterTitle={twitterTitle || headline}
        twitterDescription={twitterDescription || subhead}
      />
      <Header whiteBkg />
      <main className='instructors-main'>
        <div className='instructors-panel'>
          <div className='instructors-intro'>
            <h1>{headline}</h1>
            <p>{subhead}</p>
          </div>

          <div className='instructor-triggers'>
            {instructors.map(({ _key, name, color }) => (
              <div
                key={_key}
                className={`trigger-item ${
                  name === activeInstructor ? 'active' : ''
                }`}
                role='button'
                tabIndex='0'
                onClick={() => updateActiveInstructor(name)}
                onKeyDown={e =>
                  (e.key === 'Enter' || e.key === ' ') &&
                  updateActiveInstructor(name)
                }>
                <h4 className='trigger-item--name'>{name}</h4>
                <Arrow className='trigger-item--arrow' />
              </div>
            ))}
          </div>
        </div>

        <div className='instructors-content'>
          <div className='instructors-content--inner'>
            {instructors.map(instructor => (
              <InstructorPlank
                key={instructor._key}
                name={instructor.name}
                bio={instructor.bio}
                headshot={instructor.headshot}
                active={instructor.name === activeInstructor ? true : false}
                color={instructor.color.hex}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityInstructorsPage {
      nodes {
        instructorsPageContent {
          seo {
            metaTitle
            metaDescription
            ogTitle
            ogDescription
            twitterTitle
            twitterDescription
            previewImage {
              asset {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
          }
          headline
          subhead
          instructors {
            _key
            name
            bio
            headshot {
              asset {
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            color {
              hex
            }
          }
        }
      }
    }
  }
`;

export default Instructors;
