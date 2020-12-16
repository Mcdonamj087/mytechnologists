export default {
  title: 'General',
  name: 'general',
  type: 'document',
  fields: [
    {
      title: 'General Site Settings',
      name: 'generalSiteSettings',
      type: 'generalObject',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'General Settings',
      };
    },
  },
};
