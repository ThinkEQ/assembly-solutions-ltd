import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import withEmotion from './withEmotion'

// Templates
import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndustriesPagePreview from './preview-templates/IndustriesPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview))
CMS.registerPreviewTemplate('industries', withEmotion(IndustriesPagePreview))
  