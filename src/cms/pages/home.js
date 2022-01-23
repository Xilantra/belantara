import seo from '../partials/seo'
import hero from '../sections/hero'
// import textBlock from '../sections/textBlock'

const index = {
  file: 'src/pages/index.md',
  label: '🏡 Home',
  name: 'index',
  fields: [
    {
			label: 'Template Key',
			name: 'templateKey',
			widget: 'hidden',
			default: 'index-page',
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
    // textBlock,
  ],
}

export default index
