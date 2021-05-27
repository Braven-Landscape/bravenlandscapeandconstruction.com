export default {
  name: 'techWeUseLogo',
  title: 'Tech We Use Logo',
  description: 'Add a tech logo within the "Tech We Use" section',
  type: 'object',
  fields: [
    {
      name: 'techWeUseLogo',
      title: 'Tech We Use Logo Title',
      description: 'Add a title to your logo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'techWeUseLogoImage',
      title: 'Image',
      description: 'Add a tech logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
