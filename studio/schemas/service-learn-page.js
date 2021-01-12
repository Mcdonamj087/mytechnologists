export default {
  title: 'Service Learn Page',
  name: 'serviceLearnPage',
  type: 'object',
  fields: [
    {
      title: 'Hero - Headline',
      name: 'heroHeadline',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Hero - Subtext',
      name: 'heroSubtext',
      rows: 5,
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Hero - Image',
      name: 'heroImage',
      type: 'image',
    },
    {
      title: 'What To Expect - Headline',
      name: 'whatToExpectHeadline',
      type: 'url',
    },
    {
      title: 'What To Expect - Body',
      name: 'whatToExpectBody',
      type: 'richTextEditor',
    },
    {
      title: 'What To Expect - Image',
      name: 'whatToExpectImage',
      type: 'image',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seoObject',
    },
  ],
};
