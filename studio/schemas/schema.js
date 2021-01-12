// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Imported schemas
import rte from './rte';
import general from './general';
import generalObject from './general-object';
import seoObject from './seo-object';
import homepage from './homepage';
import homepageObject from './homepage-object';
import servicePage from './service-page';
import serviceGeneral from './service-general';
import serviceHomepage from './service-homepage';
import serviceObject from './service-object';
import servicePurchasePage from './service-purchase-page';
import instructorObject from './instructor-object';
import instructorsPage from './instructors-page';
import instructorsPageObject from './instructors-page-object';
import whyUsPage from './why-us-page';
import whyUsPageObject from './why-us-page-object';
import attributionLogo from './attribution-logo-object';
import faqPage from './faq-page';
import faqPageObject from './faq-page-object';
import faq from './faq';
import serviceLearnPage from './service-learn-page';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    rte,
    general,
    generalObject,
    seoObject,
    homepage,
    homepageObject,
    serviceGeneral,
    serviceHomepage,
    servicePage,
    serviceObject,
    servicePurchasePage,
    serviceLearnPage,
    instructorObject,
    instructorsPage,
    instructorsPageObject,
    whyUsPage,
    whyUsPageObject,
    attributionLogo,
    faqPage,
    faqPageObject,
    faq,
  ]),
});
