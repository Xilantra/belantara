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
        // hint: 'Please keep in mind that we will use the following fields for the navigation label.',
      },
      {
        label: 'Subheading',
        name: 'description',
        widget: 'string',
        required: false,
      },
      {
        label: 'Hero Layout',
        name: 'layout',
        widget: 'select',
        required: false,
        default: 'Image Center',
        options: ['Image Center', 'Image Left', 'Image Right'],
      },
      {
        label: 'Text Placement',
        name: 'textPlacement',
        widget: 'select',
        required: false,
        default: 'Center',
        options: ['Top Left', 'Top Center', 'Top Right', 'Center Left', 'Center', 'Center Right', 'Bottom Left', 'Bottom Center', 'Bottom Right']
      },
      {
        label: 'Image',
        name: 'image',
        widget: 'image',
        required: false,
        default: '/img/jumbotron.jpg',
        hint: 'You can upload a png image if you want to combine it with the background color below.',
      },
      {
        label: 'Background Color',
        name: 'color',
        widget: 'color',
        required: false,
        default: '#F6B472',
        enableAlpha: true,
        hint: 'You can ignore the upload image section if you want to use background color only for your hero section.',
      },
      {
        label: 'Select Image Height',
        name: 'size',
        widget: 'select',
        options: ['Small', 'Medium', 'FullPage'],
        required: false,
        default: 'Medium',
        hint: "Small is 200px height, Medium is 400px height and FullPage is 100% height. The width following the user's screen size.",
      },
      {
        label: 'Image Crop Position',
        name: 'position',
        widget: 'select',
        options: ['Top Left', 'Top Center', 'Top Right', 'Center Left', 'Center', 'Center Right', 'Bottom Left', 'Bottom Center', 'Bottom Right'],
        required: false,
        default: 'Center',
      },
    ],
  }
  
  export default hero
  