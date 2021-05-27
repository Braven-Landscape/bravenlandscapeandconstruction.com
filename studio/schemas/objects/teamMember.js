export default {
  name: 'teamMember',
  title: 'Team Member',
  description: 'Add teamMembers within the teamMember section',
  type: 'object',
  fields: [
    {
      name: 'teamMemberName',
      title: 'Name',
      description: 'Add a name to your team member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMemberPosition',
      title: 'Position',
      description: 'Add a position to your team member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMemberImage',
      title: 'Image',
      description: 'Add an image to your team member',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
