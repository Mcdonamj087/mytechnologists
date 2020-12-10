import React from 'react';
import { FaShapes as icon } from 'react-icons/fa';

export default {
  title: 'Services',
  name: 'servicePage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Service Page Content',
      name: 'servicePageContent',
      type: 'serviceObject',
    },
  ],
  preview: {
    select: {
      title: 'servicePageContent.general.navText',
      image: 'servicePageContent.homepageContent.featuredImage',
    },
    prepare: ({ title, image }) => {
      return {
        title: title,
        media: image,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'servicePageContent.general.order', direction: 'asc' }],
    },
  ],
};
