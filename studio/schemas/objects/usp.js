export default {
  name: 'usp',
  title: 'Unique Selling Proposition',
  description: 'Add a Unique Selling Proposition within the USP section',
  type: 'object',
  fields: [
    {
      name: 'uspDescription',
      title: 'Unique Selling Proposition Description',
      description: 'Add a short description to your USP',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'uspIcon',
      title: 'Unique Selling Proposition Icon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
