import React from 'react'
import { Link } from 'react-scroll'
import { useMediaQuery } from '@chakra-ui/react'

const ReactScroll = ({ children }) => {
    const [isLargerThan760] = useMediaQuery("(min-width: 760px)")
    return (
        <Link
        to="what-we-do-home"
        smooth={true}
        spy={true}
        offset={isLargerThan760 ? 0 : -60}
        duration={1000}
        >
        {children}
        </Link>
    )
}

export default ReactScroll

