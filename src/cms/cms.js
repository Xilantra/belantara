import IndexPagePreview from './preview-templates/IndexPagePreview'
import pages from '../cms/pages'
import notes from '../cms/collections/notes'
import work from '../cms/collections/work'
import settings from '../cms/collections/settings'

const CMS = typeof window !== 'undefined' ? window.CMS : null

if (typeof window !== 'undefined') {
  window.CMS_MANUAL_INIT = true
}

if (CMS) {
  CMS.init({
    config: {
      load_config_file: false,
      backend: {
        name: 'git-gateway',
        branch: 'dev',
        local_backend: true,
        commit_messages: {
          create: 'Create {{collection}} “{{slug}}”',
          update: 'Update {{collection}} “{{slug}}”',
          delete: 'Delete {{collection}} “{{slug}}”',
          uploadMedia: '[skip ci] Upload “{{path}}”',
          deleteMedia: '[skip ci] Delete “{{path}}”'
      }
      },
      // publish_mode: 'editorial_workflow',
      logo_url: '/img/logo.svg',
      media_folder: '/static/img',
      public_folder: '/img',
      collections: [pages, notes, work, settings],
    },
  })

  CMS.registerPreviewTemplate('index', IndexPagePreview)
}
