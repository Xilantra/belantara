import seo from '../partials/seo'
import hero from '../sections/hero'

const now = {
  file: 'src/pages/now/index.md',
  label: '⏳ Now',
  name: 'now',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'now-page',
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
      label: 'Timeline',
      name: 'timeline',
      widget: 'list',
      default: '',
      required: false,
      minimize_collapsed: true,
      fields: [
        {label: 'Title', name: 'title', widget: 'string', hint: 'You can put date or subject here.'},
        {label: "Body", name: "body", widget: "markdown"}
      ]
    },
  ],
}

export default now
