import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, widgetFor }) => {

  return (
    <ServicesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    intro={entry.getIn(['data', 'intro'])}
    imgSrc={{childImageSharp: { fluid: entry.getIn(['data', 'image'])}}}
  />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview
