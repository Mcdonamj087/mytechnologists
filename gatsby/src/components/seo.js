import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useDefaultSeo from '../hooks/useDefaultSeo';

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
  const defaultSeo = useDefaultSeo();

  const {
    metaTitle: defaultMetaTitle,
    metaDescription: defaultMetaDescription,
    ogTitle: defaultOgTitle,
    ogDescription: defaultOgDescription,
    previewImage: defaultPreviewImage,
    twitterTitle: defaultTwitterTitle,
    twitterDescription: defaultTwitterDescription,
  } = defaultSeo.generalSEO;

  const titleCascade = title || defaultMetaTitle;
  const descriptionCascade = description || defaultMetaDescription;
  const previewImageCascade =
    previewImage || defaultPreviewImage?.asset.fluid.src;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleCascade}
      titleTemplate={
        titleCascade ? `%s | ${defaultSeo.organizationName}` : null
      }>
      <body className={bodyClass} />
      <meta name='description' content={descriptionCascade} />
      <meta name='og:image' content={previewImageCascade} />
      <meta name='og:title' content={ogTitle || title || defaultOgTitle} />
      <meta
        name='og:description'
        content={ogDescription || defaultOgDescription || descriptionCascade}
      />
      <meta name='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:image' content={previewImageCascade} />
      <meta
        name='twitter:title'
        content={twitterTitle || defaultTwitterTitle || title}
      />
      <meta
        name='twitter:description'
        content={
          twitterDescription || defaultTwitterDescription || descriptionCascade
        }
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: ``,
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
