import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'General Settings Object',
  name: 'generalObject',
  type: 'object',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'seo', title: 'SEO Defaults' },
    { name: 'theme', title: 'Theme' },
    { name: 'contact', title: 'Contact' },
  ],
  options: {
    // setting layout to object will group the tab content in an object fieldset border.
    // ... Useful for when your tab is in between other fields inside a document.
    layout: 'object',
  },

  fields: [
    {
      title: 'Default SEO Settings',
      name: 'generalSEO',
      description: `You will have a chance to input this same info on a per page basis. Should you fail to do so, this info will be used by default.`,
      type: 'seoObject',
      fieldset: 'seo',
    },
    {
      title: 'Primary Brand Color',
      description:
        'Your theme is primarily black & white, but when color is needed in certain components, this is the color that will be used.',
      name: 'primaryBrandColor',
      type: 'color',
      fieldset: 'theme',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Homepage Overlay',
      description: `If enabled, a dark overlay will be placed on top of background photos. Text and buttons will all display white.  This is a good option if the photography you have on the homepage isn't suitable for text readability`,
      name: 'homepageOverlay',
      type: 'boolean',
      fieldset: 'theme',
    },
    {
      title: 'Organization Name',
      description:
        'This name will be appended to your SEO titles as well as used in other areas of the site that may require your company name.',
      name: 'organizationName',
      type: 'string',
      fieldset: 'contact',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Contact Email',
      description:
        'The email you prefer people contact you. Used in the footer.',
      name: 'email',
      type: 'string',
      fieldset: 'contact',
    },
  ],
};
