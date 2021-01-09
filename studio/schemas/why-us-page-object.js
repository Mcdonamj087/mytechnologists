import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Why Us Page Data Object',
  name: 'whyUsPageObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'content', title: 'Page Content' },
    { name: 'seoTab', title: 'SEO' },
    { name: 'logos', title: 'Logos' },
  ],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      title: 'Our Story Body Content',
      name: 'ourStoryBody',
      type: 'text',
      rows: 8,
      fieldset: 'content',
    },
    {
      title: 'Gallery Image 1',
      name: 'image1',
      type: 'image',
      fieldset: 'content',
    },
    {
      title: 'Gallery Image 2',
      name: 'image2',
      type: 'image',
      fieldset: 'content',
    },
    {
      title: 'Gallery Image 3',
      name: 'image3',
      type: 'image',
      fieldset: 'content',
    },
    {
      title: 'Why Choose Us - Headline',
      name: 'whyChooseUsHeadline',
      type: 'string',
      fieldset: 'content',
    },
    {
      title: 'Why Choose Us - Body Content',
      name: 'whyChooseUsBody',
      type: 'richTextEditor',
      fieldset: 'content',
    },
    {
      title: 'SEO Content',
      name: 'seo',
      type: 'seoObject',
      fieldset: 'seoTab',
    },
    {
      title: 'Logos Headline',
      description: 'A short headline to preface the company logo marqee.',
      name: 'logosHeadline',
      type: 'string',
      fieldset: 'logos',
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      description: `Upload logos of companies your candidates have been hired by. These will display in a marqee-style carousel.`,
      of: [{ type: 'attributionLogo' }],
      fieldset: 'logos',
    },
  ],
};
