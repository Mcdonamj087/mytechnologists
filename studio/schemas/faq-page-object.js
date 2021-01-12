import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'FAQ Page Data Object',
  name: 'faqPageObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'content', title: 'Page Content' },
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
      name: 'faqHeadline',
      type: 'string',
      fieldset: 'content',
    },
    {
      title: 'Featured Image',
      name: 'faqImage',
      type: 'image',
      fieldset: 'content',
    },
    {
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [{ type: 'faq' }],
      fieldset: 'content',
    },
    {
      title: 'SEO Content',
      name: 'seo',
      type: 'seoObject',
      fieldset: 'seoTab',
    },
  ],
};
