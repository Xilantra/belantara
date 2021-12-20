import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import WorkPostPreview from './preview-templates/WorkPostPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import StackPagePreview from './preview-templates/StackPagePreview'
import LinksPagePreview from './preview-templates/LinksPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('stack', StackPagePreview)
CMS.registerPreviewTemplate('stack', LinksPagePreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
