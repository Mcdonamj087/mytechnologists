export default {
  title: 'Attribution Logo',
  name: 'attributionLogo',
  type: 'object',
  fields: [
    {
      title: 'Company Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: `Logo Image`,
      description: `Please crop/trim any whitespace around the logo image prior to uploading. White or transparent backgrounds only. PNG/JPG preferred. Black and white filter applied via code!`,
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
