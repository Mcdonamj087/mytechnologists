import Tabs from 'sanity-plugin-tabs';

export default {
  name: 'serviceObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'general', title: 'General' },
    { name: 'homepage', title: 'Homepage Section' },
    { name: 'purchasePage', title: 'Purchase Page' },
    { name: 'infoPage', title: 'Learn Page' },
  ],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      title: ' ',
      description:
        'This is general information about the service you are offering. It will be pulled into various places on the site.',
      name: 'general',
      type: 'serviceGeneral',
      fieldset: 'general',
    },
    {
      title: ' ',
      description:
        'On your homepage, there is a section for each service you have created. This content is used to populate that section.',
      name: 'homepageContent',
      type: 'serviceHomepage',
      fieldset: 'homepage',
    },
    {
      title: ' ',
      name: 'purchasePageContent',
      type: 'servicePurchasePage',
      fieldset: 'purchasePage',
    },
  ],
};
