import seo from '../partials/seo'
import hero from '../sections/hero'

const about = {
  file: 'src/pages/about/index.md',
  label: '😁 About',
  name: 'about',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'about-page',
    },
    {
      label: 'Post Type',
      name: 'postType',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Slug (The Post URL)',
      name: 'slug',
      widget: 'string',
      default: '',
      pattern: ['^[a-z0-9]+(?:-[a-z0-9]+)*$','A slug can have no spaces or special characters'],
      hint: 'Keep it short. Example: how-to-cook-sambal. (Do not include folder or file extension)'
    },
    {
      label: 'Last Update',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    seo,
    hero,
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
    },
  ],
}

export default about
