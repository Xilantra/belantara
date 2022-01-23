import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import pages from '../cms/pages'
import notes from '../cms/collections/notes'
import work from '../cms/collections/work'
import settings from '../cms/collections/settings'

window.CMS_MANUAL_INIT = true

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

// import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

// import NowPagePreview from './preview-templates/NowPagePreview'
// import CreatePagePreview from './preview-templates/CreatePagePreview'
// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import WorkPostPreview from './preview-templates/WorkPostPreview'
// import NotePostPreview from './preview-templates/NotePostPreview'
// import StackPagePreview from './preview-templates/StackPagePreview'
// import LinksPagePreview from './preview-templates/LinksPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('now', NowPagePreview)
// CMS.registerPreviewTemplate('create', CreatePagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('stack', StackPagePreview)
// CMS.registerPreviewTemplate('links', LinksPagePreview)
// CMS.registerPreviewTemplate('work', WorkPostPreview)
// CMS.registerPreviewTemplate('note', NotePostPreview)
