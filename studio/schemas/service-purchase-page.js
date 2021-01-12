export default {
  title: 'Service Purchase Page',
  name: 'servicePurchasePage',
  type: 'object',
  fields: [
    // {
    //   title: 'Slug',
    //   name: 'slug',
    //   type: 'slug',
    //   options: {
    //     source: (source, options) =>
    //       `${source.servicePageContent.general.navText}-enroll`,
    //   },
    //   validation: Rule => Rule.required(),
    // },
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
      title: 'Calendly Event Link - Primary',
      description: 'Used to pull in the correct scheduling calendar',
      name: 'eventLink',
      type: 'url',
    },
    {
      title: 'Calendly Event Link - Secondary (optional)',
      description: `If you provide this secondary Calendly event link, the service sidebar will display a button for each Calendly event, allowing users to launch each calendary by clicking it's respective button.`,
      name: 'eventLinkAlt',
      type: 'url',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seoObject',
    },
  ],
};
