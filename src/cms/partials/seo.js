const seo = {
    label: 'SEO Settings',
    name: 'seo',
    widget: 'object',
    collapsed: true,
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
        hint: 'Customised title for SEO purposes. Keep it around 60-70 characters.',
      },
      {
        label: 'SEO Description',
        name: 'description',
        widget: 'text',
        required: false,
      },
      {
        label: 'Thumbnail Image',
        name: 'image',
        widget: 'image',
        required: true,
        default: '/img/jumbotron.jpg',
        hint: 'This thumbnail image will be used when people share the page link or view search results on Google.',
      },
    ],
  }
  
  export default seo
  