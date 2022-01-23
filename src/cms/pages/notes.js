import seo from '../partials/seo'
import hero from '../sections/hero'

const page = {
  file: 'src/pages/notes/index.md',
  label: '📜 Notes',
  name: 'notes',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'note-page',
    },
    {
      label: 'Post Type',
      name: 'postType',
      widget: 'hidden',
      default: 'page',
    },
		// {
    //   label: 'Page Title',
    //   name: 'title',
    //   widget: 'string',
    // },
    seo,
    hero,
  ],
}

export default page
