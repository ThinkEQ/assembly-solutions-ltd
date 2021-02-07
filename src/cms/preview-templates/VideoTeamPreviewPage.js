import React from 'react'
import PropTypes from 'prop-types'
import { VideoIndexTemplate } from '../../templates/video-page'

const VideoPagePreview = ({ entry, widgetsFor, getAsset }) => {

    const data = entry.getIn(['data']).toJS()

    const teamImg = () => {
        const format = widgetsFor('team-members').map((item) => {
              const img = item.getIn(['data', 'image'])
             
              return {
                   // alt: item.getIn(['data', 'alt']),
                    bio: item.getIn(['data', 'bio']),
                    interests: item.getIn(['data', 'interests']),
                    jobtitle: item.getIn(['data', 'jobtitle']),
                    image: {childImageSharp: { fluid: {src: getAsset(img).url, presentationHeight: 263, presentationWidth: 292 }}},
                    name: item.getIn(['data', 'name'])
                }
        })

        return format
    }
      
    if (data) {
        const teamMembers = teamImg()._tail ? teamImg()._tail.array : []
        return (
        <VideoIndexTemplate
            title={data.title}
            teamMembers={teamMembers}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

VideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VideoPagePreview