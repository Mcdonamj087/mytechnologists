import { useStaticQuery, graphql } from 'gatsby';

export const useDefaultSeo = () => {
  const { general } = useStaticQuery(graphql`
    query {
      general: allSanityGeneral {
        nodes {
          generalSiteSettings {
            organizationName
            generalSEO {
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
    }
  `);

  return general.nodes[0].generalSiteSettings;
};

export default useDefaultSeo;
