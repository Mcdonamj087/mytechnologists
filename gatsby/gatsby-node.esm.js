import path from 'path';
import { slugify } from './src/utils';

async function turnServicesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const servicePurchasePageTemplate = path.resolve(
    './src/templates/service-purchase-page/service-purchase-page.template.js'
  );

  const serviceLearnPageTemplate = path.resolve(
    './src/templates/service-learn-page/service-learn-page.template.js'
  );
  // 2. Query the primary brand color and service page content
  const { data } = await graphql(`
    query {
      general: allSanityGeneral {
        nodes {
          generalSiteSettings {
            primaryBrandColor {
              hex
            }
          }
        }
      }
      servicePages: allSanityServicePage {
        nodes {
          _id
          servicePageContent {
            general {
              navText
            }
            purchasePageContent {
              headline
              details {
                _rawData
              }
              price
              eventLink
              eventLinkAlt
              seo {
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
            learnPageContent {
              heroHeadline
              heroSubtext
              whatToExpectHeadline
              whatToExpectBody {
                _rawData
              }
              seo {
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
    }
  `);

  const { general, servicePages } = data;
  const primaryBrandColor =
    general.nodes[0].generalSiteSettings.primaryBrandColor.hex;

  // 3. Loop over each blog article and create a page for that article
  servicePages.nodes.forEach(({ servicePageContent, _id }) => {
    // console.log(service.servicePageContent.purchasePageContent);
    actions.createPage({
      path: `${slugify(servicePageContent.general.navText)}/purchase`,
      component: servicePurchasePageTemplate,
      context: {
        id: _id,
        pageContent: servicePageContent.purchasePageContent,
        primaryBrandColor,
      },
    });

    actions.createPage({
      path: slugify(servicePageContent.general.navText),
      component: serviceLearnPageTemplate,
      context: {
        id: _id,
        serviceName: servicePageContent.general.navText,
        pageContent: servicePageContent.learnPageContent,
      },
    });
  });
}

// Create pages dynamically
export async function createPages(params) {
  // 1. Blog Articles
  await turnServicesIntoPages(params);
  // 2. Press Pages
}
