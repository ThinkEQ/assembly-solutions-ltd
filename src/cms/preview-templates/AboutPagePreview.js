import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {

  return (
    <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    subtitle={entry.getIn(['data', 'subtitle'])}
    intro={entry.getIn(['data', 'intro'])}
    content={entry.getIn(['data', 'body'])}
    imgSrc={{childImageSharp: { fluid: entry.getIn(['data', 'image'])}}}
  />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
