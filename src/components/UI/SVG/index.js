import React from 'react'

// Import available svg icons
import LinkedIn from './svgs/linkedin' 
import Youtube from './svgs/youtube'
import Check from './svgs/check'
import Arrow from './svgs/dwnArrow'

// Pure
import Football from './svgs/football'
import Cycling from './svgs/cycling'
import Gardening from './svgs/gardening'
import JiuJitsu from './svgs/jiujitsu'
import Skiing from './svgs/Skiing'
import Surfing from './svgs/Surfing'
import Snowboarding from './svgs/SnowBoarding'
import Formula1 from './svgs/formula1'
import Archery from './svgs/archery'
import Cooking from './svgs/cooking'
import Hiking from './svgs/hiking'
import Church from './svgs/church'
import Decorating from './svgs/decorating'
import ClimbingWall from './svgs/climbingWall'
import Golf from './svgs/golf'
import Knitting from './svgs/knitting'
import Reading from './svgs/reading'
import Xbox from './svgs/xbox'
import TwentyEmblem from './svgs/twentyemblem'
import Logo from './svgs/logo'
import Chat from './svgs/chat'
import Weights from './svgs/weights'

const SvgIcon = (props) => {
    switch (props.name) {
        case "logo":
            return <Logo {...props} />
        case "chat":
            return <Chat {...props} />
        case "linkedin": 
            return <LinkedIn {...props}/>
        case "youtube":
            return <Youtube {...props} />
        case "check":
            return <Check {...props} />
        case "downArrow":
            return <Arrow {...props}/>
        case "football":
            return <Football {...props} />
        case "cycling":
            return <Cycling {...props} />
        case "gardening":
            return <Gardening {...props} />
        case "jiujitsu":
            return <JiuJitsu {...props} />
        case "skiing":
            return <Skiing {...props} />
        case "surfing":
            return <Surfing {...props} />
        case "snowboarding":
            return <Snowboarding {...props} />
        case "formula1":
            return <Formula1 {...props} />
        case "archery":
            return <Archery {...props} />
        case "cooking":
            return <Cooking {...props} />
        case "hiking":
            return <Hiking {...props} />
        case "church":
            return <Church {...props} />
        case "decorating":
            return <Decorating {...props} />
        case "climbing-wall":
            return <ClimbingWall {...props} />
        case "golf":
            return <Golf {...props} />
        case "knitting":
            return <Knitting {...props} />
        case "reading":
            return <Reading {...props} />
        case "xbox":
            return <Xbox {...props} />
        case "twentyEmblem":
            return <TwentyEmblem {...props} />
        case "weights":
            return <Weights {...props} />
        default:
            return '?'
    }
}

export default SvgIcon