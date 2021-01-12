import { useStaticQuery, graphql } from 'gatsby';

export const useDefaultSeo = () => {
  const { general } = useStaticQuery(graphql`
    query {
      general: allSanityGeneral {
        nodes {
          generalSiteSettings {
            organizationName
            generalSEO {
              ...SEOData
            }
          }
        }
      }
    }
  `);

  return general.nodes[0].generalSiteSettings;
};

export default useDefaultSeo;
