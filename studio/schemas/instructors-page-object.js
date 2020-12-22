import Tabs from 'sanity-plugin-tabs';

export default {
  title: 'Instructors Page Data Object',
  name: 'instructorsPageObject',
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
      name: 'headline',
      type: 'string',
      fieldset: 'content',
    },
    {
      title: 'Subhead',
      name: 'subhead',
      type: 'text',
      rows: 3,
      fieldset: 'content',
    },
    {
      title: 'Instructors',
      name: 'instructors',
      type: 'array',
      of: [{ type: 'instructorObject' }],
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
