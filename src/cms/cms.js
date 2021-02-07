import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import withEmotion from './withEmotion'

// Templates
import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndustriesPagePreview from './preview-templates/IndustriesPagePreview'
import TeamPagePreview from './preview-templates/TeamPreviewPage'
import TermsPagePreview from './preview-templates/TermsPreviewPage'
import PrivacyPagePreview from './preview-templates/PrivacyPolicyPreview'
import NewsArticlePreview from './preview-templates/NewsArticlePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview))
CMS.registerPreviewTemplate('industries', withEmotion(IndustriesPagePreview))
CMS.registerPreviewTemplate('team', withEmotion(TeamPagePreview))
CMS.registerPreviewTemplate('terms-and-conditions', withEmotion(TermsPagePreview))
CMS.registerPreviewTemplate('privacy-policy', withEmotion(PrivacyPagePreview))
CMS.registerPreviewTemplate('news', withEmotion(NewsArticlePreview))
  