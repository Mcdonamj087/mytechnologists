export default {
  name: 'servicePurchasePage',
  type: 'object',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (source, options) =>
          `${source.servicePageContent.general.navText}-enroll`,
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Subhead',
      name: 'subhead',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    },
  ],
};
