import React from 'react'
import PropTypes from 'prop-types'
import { IndustryPageTemplate } from '../../templates/industries-page'

const IndustriesPagePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {

    const data = entry.getIn(['data']).toJS()
    const image = entry.getIn(['data', 'image'])
    const industries = () => {
        const format = widgetsFor('industries').map((item) => {
              const img = item.getIn(['data', 'image'])
             
              return {
                    alt: item.getIn(['data', 'alt']),
                    featued: false,
                    image: {childImageSharp: { fluid: {src: getAsset(img).url, presentationHeight: 680, sizes: "(max-width: 1026px) 100vw, 1026px" }}},
                    name: item.getIn(['data', 'name'])
                }
        })

        return format
    }
    
   
    if (data) {
        return (
        <IndustryPageTemplate
            title={data.title}
            subtitle={data.subtitle}
            intro={data.intro}
            industries={industries()}
            testimonial={data.testimonial}
            content={widgetFor('body')}
            imgHeader={{childImageSharp: { fluid: {src: getAsset(image).url, presentationHeight: 680, sizes: "(max-width: 1026px) 100vw, 1026px" }}}} 
          
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndustriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndustriesPagePreview