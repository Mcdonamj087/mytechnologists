import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from '../components/button/button.component';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Wrapper = styled(BackgroundImage)`
  min-height: calc(100vh - 55px);
  background: black;
  position: relative;
  top: 55px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 30px;
`;

const Content = styled.div`
  max-width: 460px;
  padding: 20vh 0;
  margin: 0 auto;
  color: #fff;
  text-align: center;

  h1 {
    color: inherit;
    font-size: 80px;

    @media screen and (min-width: 576px) {
      font-size: 130px;
    }
  }

  p {
    margin-bottom: 40px;
  }
`;

const NotFoundPage = ({ data }) => {
  const image = data.file.childImageSharp.fluid;

  console.log(data);
  return (
    <Layout>
      <SEO title='404: Not found' />
      <Wrapper fluid={image}>
        <Content>
          <h1>404</h1>
          <p>
            Oops! Looks like you fired at the wrong satellite. Let’s get you
            back to earth.
          </p>
          <Button color='white' to='/'>
            Go to Homepage
          </Button>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "space.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
