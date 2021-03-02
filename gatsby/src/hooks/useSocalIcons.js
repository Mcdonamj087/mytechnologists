import { graphql, useStaticQuery } from 'gatsby';

export const useSocialIcons = () => {
  const { general } = useStaticQuery(graphql`
    query {
      general: allSanityGeneral {
        nodes {
          generalSiteSettings {
            facebookUrl
            instagramUrl
            linkedinUrl
          }
        }
      }
    }
  `);

  return general.nodes[0].generalSiteSettings;
};

export default useSocialIcons;
