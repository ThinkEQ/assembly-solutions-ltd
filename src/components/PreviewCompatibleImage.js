import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, ...props }) => {
  const { alt = '', childImageSharp, image } = imageInfo
  const maxHeight = childImageSharp.fluid.presentationHeight ? childImageSharp.fluid.presentationHeight : "auto"
  const maxWidth = childImageSharp.fluid.presentationWidth ? childImageSharp.fluid.presentationWidth : "auto"
  const imageStyle = { maxHeight, maxWidth, ...props }
  if (!!image && !!image.childImageSharp) {
    return (
      <Img draggable={false} style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img draggable={false} style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img draggable={false} style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
