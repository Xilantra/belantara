import seo from '../partials/seo'
import hero from '../sections/hero'

const work = {
  file: 'src/pages/work/index.json',
  label: '🧑🏻‍🎨 Work',
  name: 'work',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'work-page',
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
    seo,
    hero,
  ],
}

export default work
