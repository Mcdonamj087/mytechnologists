export default {
  title: 'Text',
  name: 'richTextEditor',
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: ' ',
      name: 'data',
      type: 'array',
      of: [
        {
          type: 'block',
          // Only allow bulleted lists
          lists: [{ title: 'Bullets', value: 'bullet' }],
          // don't allow styles
          styles: [
            { title: 'Heading', value: 'h3' },
            {
              title: 'SMALL CAPS TITLE',
              value: 'h6',
            },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
};
