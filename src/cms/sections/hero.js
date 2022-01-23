const hero = {
    label: 'Hero Section',
    name: 'hero',
    widget: 'object',
    collapsed: true,
    hint: 'Read more about how to create a good hero/CTA section [here](https://blog.hubspot.com/marketing/craft-subheadlines-click) or [here](https://twitter.com/Julian/status/1365393907631022080)',
    fields: [
      {
        label: 'Headline',
        name: 'title',
        widget: 'string',
      },
      {
        label: 'Subheading',
        name: 'description',
        widget: 'string',
        required: false,
      },
      {
        label: 'Image',
        name: 'image',
        widget: 'image',
        required: false,
      },
      {
        label: 'Select Size',
        name: 'size',
        widget: 'select',
        options: ['Small', 'Medium', 'FullPage']
      },
      {
        label: 'Crop Position',
        name: 'position',
        widget: 'select',
        options: ['Top Left', 'Top Center', 'Top Right', 'Center Left', 'Center Center', 'Center Right', 'Bottom Left', 'Bottom Center', 'Bottom Right']
      },
    ],
  }
  
  export default hero
  