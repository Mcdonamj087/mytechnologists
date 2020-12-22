import { BsPersonPlusFill as icon } from 'react-icons/bs';

export default {
  title: 'Staff',
  name: 'staff',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Staff Information',
      name: 'allStaff',
      type: 'instructorObject',
    },
  ],
  preview: {
    select: {
      title: 'allStaff.name',
      image: 'allStaff.headshot',
    },
    prepare: ({ title, image }) => {
      return {
        title: title,
        media: image,
      };
    },
  },
};
