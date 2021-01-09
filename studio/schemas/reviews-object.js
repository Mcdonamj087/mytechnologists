import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Reviews Data Object',
  name: 'reviewsObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [{ name: 'logos', title: 'Logos' }],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      fieldset: 'hero',
    },
  ],
};
