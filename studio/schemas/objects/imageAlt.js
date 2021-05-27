export default {
  name: 'imageAlt',
  title: 'Image With Alt Text',
  description: 'Add an image and alt text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Add an alt text to the image',
    },
  ],
};
