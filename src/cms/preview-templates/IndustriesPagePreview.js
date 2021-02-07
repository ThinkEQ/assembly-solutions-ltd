import React from 'react'
import PropTypes from 'prop-types'
import { IndustryPageTemplate } from '../../templates/industries-page'

const IndustriesPagePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {

    const data = entry.getIn(['data']).toJS()

    const industries = () => {
        const source = data.industries

        const format = widgetsFor('industries').map((item) => {
              const image = item.getIn(['data', 'image'])
              console.log(item.getIn(['data', 'name']), 'name')
              console.log(item.getIn(['data', 'image']), 'image')
            
              console.log(item, 'item')

              return {
                    alt: entry.getIn(['data', 'alt']),
                    featued: false,
                    image: {childImageSharp: { fluid: image}},
                    name: entry.getIn(['data', 'name'])
                }
        })

        return format
    }
    console.log(industries())
   
    if (data) {
        return (
        <IndustryPageTemplate
            title={data.title}
            subtitle={data.subtitle}
            intro={data.intro}
            industries={industries()}
            testimonial={data.testimonial}
            content={widgetFor('body')}
            imgHeader={{childImageSharp: { fluid: entry.getIn(['data', 'image'])}}}
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