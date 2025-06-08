export default {
  name: 'portfolios',
  title: 'Portfolios',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'stacks',
      title: 'Tech Stacks',
      type: 'array',
      of: [{type: 'techStacks'}],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
