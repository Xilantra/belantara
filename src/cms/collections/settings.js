import general from '../pages/general'
import personal from '../pages/personal-links'

const settings = {
  name: 'settings',
  label: 'Settings',
  editor: {
    preview: false,
  },
  delete: false,
  description: 'The description is a great place for tone setting, high level information, and editing guidelines that are specific to a collection.',
  files: [general, personal],
}

export default settings