import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Homepage Data Object',
  name: 'homepageObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'hero', title: 'Hero Content' },
    { name: 'seoTab', title: 'SEO' },
  ],
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
    {
      title: 'Subhead',
      name: 'subhead',
      type: 'text',
      rows: 2,
      fieldset: 'hero',
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      fieldset: 'hero',
    },
    {
      title: 'SEO Content',
      name: 'seo',
      type: 'seoObject',
      fieldset: 'seoTab',
    },
  ],
};
