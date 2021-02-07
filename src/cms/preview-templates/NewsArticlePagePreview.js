import React from 'react'
import PropTypes from 'prop-types'
import { NewsArticleTemplate } from '../../templates/news-article'

const NewsPagePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(['data']).toJS()
   
    const image = entry.getIn(['data', 'image'])

    const [month, date, year] = new Date(data.date).toLocaleDateString("en-US").split("/")
    let months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const formatDate = `${months[month]} ${date}, ${year}`
   
    if (data) {
        return (
        <NewsArticleTemplate
            title={data.title}
            mainContent={data.layout}
            date={formatDate}
            seo={data.seo}
            img={{childImageSharp: { fluid: {src: getAsset(image).url, presentationHeight: 480, sizes: "(max-width: 1026px) 100vw, 1026px" }}}} 
          
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewsPagePreview