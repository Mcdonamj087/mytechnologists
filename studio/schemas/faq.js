import React from 'react';
import { RiQuestionnaireFill } from 'react-icons/ri';

export default {
  title: 'FAQ',
  name: 'faq',
  type: 'object',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    },
    {
      title: `Answer`,
      name: 'answer',
      type: 'richTextEditor',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
    prepare: ({ title }) => {
      console.log(title);
      return {
        title: title,
        media: () => <RiQuestionnaireFill />,
      };
    },
  },
};
