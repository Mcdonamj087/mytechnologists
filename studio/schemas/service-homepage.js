export default {
  title: 'Homepage Service Content',
  name: 'serviceHomepage',
  type: 'object',
  fields: [
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
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
    },
    {
      title: `'Purchase' Button Text`,
      name: 'purchaseBtnText',
      description: 'Max characters: 17.',
      type: 'string',
      validation: Rule => Rule.max(17),
    },
    {
      title: `'Learn More' Button Text`,
      name: 'learnBtnText',
      description: 'Max characters: 17.',
      type: 'string',
      validation: Rule => Rule.max(17),
    },
  ],
};
