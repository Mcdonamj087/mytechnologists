import { BsPeopleFill as icon } from 'react-icons/bs';

export default {
  title: 'Instructors Page',
  name: 'instructorsPage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Instructors Page',
      name: 'instructorsPageContent',
      type: 'instructorsPageObject',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Instructors Page Preview test',
    }),
  },
};
