import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkHTML from 'remark-html'

export const MDXWrapper = (props) => {
  return (
    <div className="mdx-prose" {...props} />
  )
}

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

// Parse MDX to HTML
export const toHTML = (value) => remark()
.use(remarkHTML)
.processSync(value)
.toString()

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
