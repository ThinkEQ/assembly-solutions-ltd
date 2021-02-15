import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const image = entry.getIn(['data', 'image'])

  if (data) {

  return (
      <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      subtitle={entry.getIn(['data', 'subtitle'])}
      intro={entry.getIn(['data', 'intro'])}
      imgSrc={{childImageSharp: { fluid: {src: getAsset(image).url, presentationHeight: 580, sizes: "(max-width: 1026px) 100vw, 1026px" }}}}
      />
  )

  } else {
    return <p>Loading...</p>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
