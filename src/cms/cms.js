import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
