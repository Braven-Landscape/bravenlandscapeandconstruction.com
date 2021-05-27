export default {
  name: 'surgeconCovidBenefit',
  title: 'SurgeCon Covid Benefit',
  description: 'Add a benefit within the "SurgeCon Covid Benefit" section',
  type: 'object',
  fields: [
    {
      name: 'surgeconCovidBenefitDescription',
      title: 'SurgeCon Covid Benefit Description',
      description: 'Add a short description to your benefit',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
