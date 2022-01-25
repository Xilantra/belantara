import home from '../pages/home'
import now from '../pages/now'
import contact from '../pages/contact'
import about from '../pages/about'
import work from '../pages/work'
import notes from '../pages/notes'
import stack from '../pages/stack'
import links from '../pages/links'
import tags from '../pages/tags'

const pages = {
  name: 'pages',
  label: 'Pages',
  description: 'Settings for the Pages collection. This is where you can create pages that are not posts. You can also create a page called “about” and a page called “contact”. These pages will be available in the footer navigation menu.',
	// delete: false,
  files: [home, about, contact, links, notes, now, stack, tags, work],
}

export default pages
