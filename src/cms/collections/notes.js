import seo from '../partials/seo'
import hero from '../sections/hero'

const notes = {
  name: 'notes',
  label: 'Notes',
  description: "The Notes is inspired by Maggie Appleton's Digital Garden and Andy Matuschak's Evergreen Notes. It is simply a progress category. We will be using 'tree' stages for this. 🌱 Seedlings, 🌿 Budding and 🌳 Evergreen.",
  //  Read more about it [here](https://maggieappleton.com/garden-history)
  folder: 'src/pages/notes',
  slug: '{{slug}}',
  create: true,
  identifier_field: 'seo.title',
  filter: {
    field: 'templateKey',
    value: 'note-post'
  },
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
      default: 'note-post',
    },
    {
      label: 'Post Type',
      name: 'postType',
      widget: 'hidden',
      default: 'post',
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
      label: 'Edited On',
      name: 'editDate',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Select Stage',
      name: 'stage',
      widget: 'select',
      default: '🌱 Seedlings',
      hint: '🌱 Seedlings is for very rough and early Notes. 🌿 Budding is for Notes that you\'ve cleaned up and clarified. 🌳 Evergreen is for Notes that is reasonably complete.',
      options: ['🌱 Seedlings', '🌿 Budding', '🌳 Evergreen']
    },
    {
      label: 'Hide it?',
      name: 'draft',
      widget: 'boolean',
      default: false,
      required: false,
      hint: 'Will be hidden from the site if enabled even if you click the Publish button. But people will still be able to view it in GitHub.'
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
      hint: 'Add tags to help categorize your notes. Separate tags with commas. Example: "cooking, sambal, food". Keep it under 10 tags per note.'
    },
    {
      label: 'Tags Relation',
      name: 'tagsRelation',
      widget: 'relation',
      multiple: true,
      collection: 'settings',
      file: 'tagList',
      search_fields: ['{{tags}}'],
      value_field: '{{tag}}',
      display_fields: ["{{tags}}"],
    },
    hero,
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'References and Further Reading',
      label_singular: 'Reference and Further Reading',
      name: 'references',
      widget: 'list',
      default: '',
      required: false,
      minimize_collapsed: true,
      fields: [
        {label: 'Title', name: 'title', widget: 'string'},
        {label: 'Author', name: 'author', widget: 'string'},
        {
          label: 'URL', 
          name: 'url', 
          widget: 'string', 
          // pattern: ['^https?:\/\/(.*)}', "Missing the https://"], 
          default: 'https://', 
          hint: "Don't forget to include the https://"
        }
      ]
    },
  ],
}

export default notes