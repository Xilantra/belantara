import seo from '../partials/seo'
import hero from '../sections/hero'

const contact = {
  file: 'src/pages/contact/index.md',
  label: '📱 Contact',
  name: 'contact',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'contact-page',
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

export default contact
