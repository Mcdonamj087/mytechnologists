import { AiFillStar as icon } from 'react-icons/ai';

export default {
  title: 'Why Us Page',
  name: 'whyUsPage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Why Us Page',
      name: 'whyUsPageContent',
      type: 'whyUsPageObject',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Why Us Page',
    }),
  },
};
