import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import withEmotion from './withEmotion'


import AboutPagePreview from './preview-templates/AboutPagePreview'
//import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
//CMS.registerPreviewTemplate('index', withEmotion(IndexPagePreview))
CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview))
  