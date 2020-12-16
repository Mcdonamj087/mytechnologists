export default {
  title: 'SEO Object',
  name: 'seoObject',
  type: 'object',
  fields: [
    {
      title: 'SEO Title',
      description:
        'When you look something up in a search engine, you get a list of results that appear as snippets. The SEO title is part of the snippet together with, at least, a URL and a meta description. You will usually also see the SEO title in the page tab of your browser. See: https://yoast.com/page-titles-seo/ for advice and best practices.',
      name: 'metaTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      description:
        'Google will use this text as a suggestion for the text displayed in search results.',
      name: 'metaDescription',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Preview Image',
      description:
        'This image will be used when posting links to this page on social media or when sharing via text.',
      name: 'previewImage',
      type: 'image',
    },
    {
      title: 'Facebook Title',
      description:
        'The title of your page as you would like for it to appear when displayed on Facebook. Will use SEO Title if nothing provided here.',
      name: 'ogTitle',
      type: 'string',
    },
    {
      title: 'Facebook Description',
      description:
        '1-2 sentence snippet that shows up when you post a link to this page on Facebook. Will use Meta Description if nothing provided here.',
      name: 'ogDescription',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Twitter Title',
      description:
        'The title of your page as you would like for it to appear when displayed on Twitter. Will use SEO Title if nothing provided here.',
      name: 'twitterTitle',
      type: 'string',
      validation: Rule => Rule.max(70),
    },
    {
      title: 'Twitter Description',
      description:
        'Max 200 character snippet that shows up when you post a link to this page on Facebook. Will use Meta Description if nothing provided here.',
      name: 'twitterDescription',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200),
    },
  ],
};
