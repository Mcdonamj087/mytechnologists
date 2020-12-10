export default {
  name: 'serviceGeneral',
  type: 'object',
  fields: [
    {
      title: 'Navigation Text',
      name: 'navText',
      description: 'Used for the homepage top nav and side navigation text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: `Display Order`,
      name: `order`,
      description: `You can control the order in which this service will display on your homepage and in navigation menus.`,
      type: `number`,
    },
  ],
};
