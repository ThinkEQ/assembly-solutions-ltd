import React from 'react'

// Import available svg icons
import LinkedIn from './svgs/linkedin' 
import Youtube from './svgs/youtube'

const SvgIcon = (props) => {
    switch (props.name) {
        case "linkedin": 
            return <LinkedIn {...props}/>
        case "youtube":
            return <Youtube {...props} />
        default:
            return '?'
    }
}

export default SvgIcon