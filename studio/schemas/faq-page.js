import { RiQuestionnaireFill as icon } from 'react-icons/ri';

export default {
  title: 'FAQ Page',
  name: 'faqPage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'FAQ Page',
      name: 'faqPageContent',
      type: 'faqPageObject',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'FAQ Page',
    }),
  },
};
