import React from 'react'
import PropTypes from 'prop-types'
import { IndustryPageTemplate } from '../../templates/industries-page'

const IndustriesPagePreview = ({ entry, widgetFor, widgetsFor }) => {

    const data = entry.getIn(['data']).toJS()
console.log(widgetFor('industries'), 'data')

    const industries = () => {
        const source = data.industries

        const format = widgetsFor('industries').map((item) => {
                return {
                    alt: item.getIn(['data', 'alt']),
                    featued: false,
                    image: item.getIn(['widgets', 'image']),
                    name: item.getIn(['data', 'name'])
                }
        })

        return format
    }
    console.log(industries(), 'indurtieess')
    if (data) {
        return (
        <IndustryPageTemplate
            title={data.title}
            subtitle={data.subtitle}
            intro={data.intro}
           industries={data.industries}
            testimonial={industries()}
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