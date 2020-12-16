export default {
  title: 'Service Purchase Page',
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
      title: 'Details',
      name: 'details',
      type: 'richTextEditor',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required() && Rule.precision(2),
    },
    {
      title: 'Calendly Event Link',
      description: 'Used to pull in the correct scheduling calendar',
      name: 'eventLink',
      type: 'url',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seoObject',
    },
  ],
};
