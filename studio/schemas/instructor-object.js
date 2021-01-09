export default {
  title: 'Instructor Data Object',
  name: 'instructorObject',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    {
      title: 'Headshot',
      name: 'headshot',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: `Favorite Color`,
      description: `This color is used in the big block next to the person's headshot as well as the color of their name when selected.`,
      name: 'color',
      type: 'color',
    },
  ],
};
