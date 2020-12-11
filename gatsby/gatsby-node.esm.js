import path from 'path';

async function turnServicesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const servicePurchasePageTemplate = path.resolve(
    './src/templates/service-purchase-page/service-purchase-page.template.js'
  );
  // 2. Query all blog articles
  const { data } = await graphql(`
    query {
      servicePages: allSanityServicePage {
        nodes {
          servicePageContent {
            purchasePageContent {
              slug {
                current
              }
              headline
              subhead
              price
              eventLink
            }
          }
        }
      }
    }
  `);

  // 3. Loop over each blog article and create a page for that article
  data.servicePages.nodes.forEach(({ servicePageContent }) => {
    // console.log(service.servicePageContent.purchasePageContent);
    actions.createPage({
      path: servicePageContent.purchasePageContent.slug.current,
      component: servicePurchasePageTemplate,
      context: {
        pageContent: servicePageContent.purchasePageContent,
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
