import path from 'path';

async function turnServicesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const servicePurchasePageTemplate = path.resolve(
    './src/templates/service-purchase-page/service-purchase-page.template.js'
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
            purchasePageContent {
              slug {
                current
              }
              headline
              details {
                _rawData
              }
              price
              eventLink
              eventLinkAlt
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
      path: servicePageContent.purchasePageContent.slug.current,
      component: servicePurchasePageTemplate,
      context: {
        id: _id,
        pageContent: servicePageContent.purchasePageContent,
        primaryBrandColor,
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
