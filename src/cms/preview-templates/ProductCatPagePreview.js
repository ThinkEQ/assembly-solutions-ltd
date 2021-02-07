import React from 'react'
import PropTypes from 'prop-types'
import { ProductCategoryPageTemplate} from '../../templates/product-category'

const ProductCatPagePreview = ({ entry, getAsset, widgetsFor, widgetFor }) => {

    const data = entry.getIn(['data']).toJS()
    const image = entry.getIn(['data', 'image'])
    const images = widgetsFor('images').map((image) => {
        const img = image.getIn['data', 'image']
         return { 
            alt: image.getIn(['data', 'alt']),
            image: {childImageSharp: { fluid: {src: getAsset(img).url, presentationHeight: 580, sizes: "(max-width: 1026px) 100vw, 1026px" }}}
         }
    })

    if (data) {
        return (
        <ProductCategoryPageTemplate
            title={data.title}
            subtitle={data.subtitle}
            usps={data.usps || []}
            content={widgetFor('body')}
            mainContent={data.layout}
            relatedProducts={[]} // How do we get context inside here???
            seo={data.seo}
            video={data.video}
            imgHeader={{childImageSharp: { fluid: {src: getAsset(image).url, presentationHeight: 680, sizes: "(max-width: 1026px) 100vw, 1026px" }}}}
            imgCarousel={images} 
          
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProductCatPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductCatPagePreview