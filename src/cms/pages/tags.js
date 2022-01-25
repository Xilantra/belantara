import seo from '../partials/seo'
import hero from '../sections/hero'

const tags = {
  file: 'src/pages/tags/index.md',
  label: '🏷 Tags',
  name: 'tags',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'tags-page',
    },
    {
      label: 'Post Type',
      name: 'postType',
      widget: 'hidden',
      default: 'page',
    },
    seo,
    hero,
  ],
}

export default tags
