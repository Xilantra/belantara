import seo from '../partials/seo'
import hero from '../sections/hero'

const collection = {
  name: 'work',
  label: 'Work',
  description: 'This is where you put your work. Create New Work for each project you have worked on.',
  folder: 'src/pages/work',
  slug: '{{slug}}',
  create: true,
  view_filters: [
    // Disabled because of the popup bug (Tested with Safari)
    // {
    //     label: 'Posts With Index',
    //     field: 'title',
    //     pattern: 'This is post #',
    // },
    // {
    //     label: 'Posts Without Index',
    //     field: 'title',
    //     pattern: 'front matter post',
    // },
    {
      label: 'Drafts',
      field: 'draft',
      pattern: 'true',
    },
  ],
  view_groups: [{
      label: 'Year',
      field: 'date',
      pattern: '\d{4}',
    },
    {
      label: 'Drafts',
      field: 'draft',
    },
  ],
  fields: [{
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'work-post',
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
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Featured Post?',
      name: 'featuredpost',
      widget: 'boolean',
      default: false,
      required: false,
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      default: '',
    },
    hero,
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
  ],
}

export default collection