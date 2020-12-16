/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  bodyClass,
  lang,
  title,
  description,
  previewImage,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  console.log(site);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}>
      <body className={bodyClass} />
      <meta name='description' content={metaDescription} />
      <meta name='og:image' content={previewImage} />
      <meta name='og:title' content={ogTitle || title} />
      <meta name='og:description' content={ogDescription || metaDescription} />
      <meta name='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={site.siteMetadata?.author || ''} />
      <meta name='twitter:image' content={previewImage} />
      <meta name='twitter:title' content={twitterTitle || title} />
      <meta
        name='twitter:description'
        content={twitterDescription || metaDescription}
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
