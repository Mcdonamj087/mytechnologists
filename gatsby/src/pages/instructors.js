import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Arrow from '../assets/svg/arrow.inline.svg';
import InstructorPlank from '../components/instructor-plank/instructor-plank.component';

import './instructors.styles.scss';

const Instructors = ({ data }) => {
  const {
    headline,
    subhead,
    instructors,
  } = data.allSanityInstructorsPage.nodes[0].instructorsPageContent;

  const [activeInstructor, updateActiveInstructor] = useState(
    instructors[0].name
  );

  return (
    <Layout>
      <main className='instructors-main'>
        <div className='instructors-panel'>
          <div className='instructors-intro'>
            <h1>{headline}</h1>
            <p>{subhead}</p>
          </div>

          <div className='instructor-triggers'>
            {instructors.map(({ name, color }) => (
              <div
                className={`trigger-item ${
                  name === activeInstructor ? 'active' : ''
                }`}
                onClick={() => updateActiveInstructor(name)}>
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
          headline
          subhead
          instructors {
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
