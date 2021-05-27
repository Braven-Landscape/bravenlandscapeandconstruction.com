export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   description: 'Add an image within the "Hero" section',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       title: 'Alternative text',
    //       type: 'string',
    //       description: 'Add an alt text to the image',
    //     },
    //   ],
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Add a heading within the "Hero" section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      description: 'Add a subheading within the "Hero" section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'Add a label to the CTA button within the "Hero" section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctataLink',
      title: 'CTA Link',
      description: 'Add a link to the CTA button within the "Hero" section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
