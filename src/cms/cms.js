import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import NowPagePreview from './preview-templates/NowPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import WorkPostPreview from './preview-templates/WorkPostPreview'
import NotePostPreview from './preview-templates/NotePostPreview'
import StackPagePreview from './preview-templates/StackPagePreview'
import LinksPagePreview from './preview-templates/LinksPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('now', NowPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('stack', StackPagePreview)
CMS.registerPreviewTemplate('links', LinksPagePreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
CMS.registerPreviewTemplate('note', NotePostPreview)
