import { AiFillHome as icon } from 'react-icons/ai';

export default {
  icon,
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fieldsets: [
    {
      title: 'Intro Hero',
      name: 'homepageIntroHero',
      description: `This is the first section a user sees when they visit your site. Write a short, punchy headline and subhead to capture people's attention.`,
    },
  ],
  fields: [
    {
      title: 'Headline',
      name: 'homepageIntroHero__headline',
      type: 'string',
      fieldset: 'homepageIntroHero',
    },
    {
      title: 'Subhead',
      name: 'homepageIntroHero__subhead',
      type: 'text',
      rows: 2,
      fieldset: 'homepageIntroHero',
    },
    {
      title: 'Featured Image',
      name: 'homepageIntroHero__featuredImage',
      type: 'image',
      fieldset: 'homepageIntroHero',
    },
    {
      name: 'homepageServices',
      type: 'homepageServices',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Homepage',
      };
    },
  },
};
