export default {
  name: 'service',
  title: 'Service',
  description: 'Add services within the service section',
  type: 'object',
  fields: [
    {
      name: 'serviceTitle',
      title: 'Service Title',
      description: 'Add a title to your service',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'serviceDescription',
      title: 'Service Description',
      description: 'Add a short description to your service',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'serviceImage',
      title: 'Service Image',
      description: 'Add an image to your service',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
