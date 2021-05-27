export default {
  name: 'surgeconBenefit',
  title: 'SurgeCon Benefit',
  description: 'Add a feature within the "SurgeCon Benefit" section',
  type: 'object',
  fields: [
    {
      name: 'surgeconBenefitDescription',
      title: 'SurgeCon Benefit Description',
      description: 'Add a short description to your feature',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
