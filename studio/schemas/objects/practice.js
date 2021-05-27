export default {
  name: 'practice',
  title: 'Practice',
  description: 'Add practices within the practice section',
  type: 'object',
  fields: [
    {
      name: 'practiceTitle',
      title: 'Practice Title',
      description: 'Add a title to your practice',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'practiceDescription',
      title: 'Practice Description',
      description: 'Add a short description to your practice',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'practiceIcon',
      title: 'Practice Icon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
