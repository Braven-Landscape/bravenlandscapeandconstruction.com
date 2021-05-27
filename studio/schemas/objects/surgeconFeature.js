export default {
  name: 'surgeconFeature',
  title: 'SurgeCon Feature',
  description: 'Add a feature within the "Features" section',
  type: 'object',
  fields: [
    {
      name: 'surgeconFeatureDescription',
      title: 'SurgeCon Feature Description',
      description: 'Add a short description to your feature',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
