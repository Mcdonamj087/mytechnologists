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
      title: 'Homepage Content',
      name: 'homepageContent',
      type: 'homepageObject',
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
