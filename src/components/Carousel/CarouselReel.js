import React, { Fragment } from 'react'

// Load components
import { Box, useMediaQuery } from '@chakra-ui/react'
import Carousel from './index'


/**
 * @todo
 * State quieries
 */
const CarouselReel = ({ totalSlides, children}) => {
    const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
    return (
        <Fragment>
            <Box width="100%" position="absolute" top="50%" left={{base:"0", lg:"10%"}} transform="translateY(-50%)">
                <Carousel isIntrinsicHeight totalSlides={totalSlides} infinite visibleSlides={isLargerThan900 ? 3 : 1} setHeight={500} setWidth={500}>
                    {children}
                </Carousel>
            </Box>
        </Fragment>

    )
}

export default CarouselReel