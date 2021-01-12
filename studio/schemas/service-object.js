import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Service Data Object',
  name: 'serviceObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'general', title: 'General' },
    { name: 'homepage', title: 'Homepage Section' },
    { name: 'purchasePage', title: 'Purchase Page' },
    { name: 'learnPage', title: 'Learn Page' },
  ],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      title: 'General Service Information',
      name: 'general',
      type: 'serviceGeneral',
      fieldset: 'general',
    },
    {
      title: 'Homepage Section Content',
      description:
        'On your homepage, there is a section for each service you have created. This content is used to populate that section.',
      name: 'homepageContent',
      type: 'serviceHomepage',
      fieldset: 'homepage',
    },
    {
      title: 'Purchase Page Content',
      name: 'purchasePageContent',
      type: 'servicePurchasePage',
      fieldset: 'purchasePage',
    },
    {
      title: 'Learn Page Content',
      name: 'learnPageContent',
      type: 'serviceLearnPage',
      fieldset: 'learnPage',
    },
  ],
};
