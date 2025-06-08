export default {
  name: 'techStacks',
  title: 'Tech Stacks',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'iconUrl',
      title: 'Icon URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
