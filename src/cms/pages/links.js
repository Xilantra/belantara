import seo from '../partials/seo'
import hero from '../sections/hero'
import linkList from '../sections/linkList'

const page = {
  file: 'src/pages/links/index.md',
  label: '🔗 Links',
  name: 'links',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'links-page',
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
    linkList,
  ],
}

export default page
