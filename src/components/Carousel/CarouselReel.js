import React from 'react'

// Load components
import { Box, useMediaQuery, Image } from '@chakra-ui/react'
import Carousel from './CustomCarousel'
import LeftHandle from '../../img/svg/leftHandle.svg'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const SlideLeft = ({ next }) => {
    return (
        <Box onClick={() => next()} cursor="pointer" top="50%" left={{base: "-50px", lg: "-80px"}}  height={{base:"45px", lg: "90px"}} width={{base: "45px", lg: "90px"}} transform="translateX(-50%)" position="absolute">
            <Image src={LeftHandle} alt="left icon" />
        </Box>  
    )
}

const CarouselReel = ({ data }) => {
    const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
    const [isLessThan464] = useMediaQuery("(max-width: 464px")
    return (
        <Box width="100%" position="absolute" top="50%" left={{base:"20%", md: "10%", lg:"15%"}} transform="translateY(-50%)">
            <Carousel 
            inifnite={true}
            arrows={false}
            desktopView={3}
            tabletView={2}
            mobileView={1}
            centerMode={false}
            partialVisible={isLessThan464 ? false : true}
            renderButtonGroupOutside={true} 
            customButtonGroup={<SlideLeft />}
            >
            {data.map((img, index) => {
                return (
                  <Box width={{base: "80%", md: "100%"}} cursor="grab" _active={{cursor: "grabbing"}} maxHeight="400px" layerStyle={isLargerThan900 ? "brightness" : ""} height="100%">
                      <PreviewCompatibleImage imageInfo={img.image} borderRadius="3px" height="100%" width="98%" />
                  </Box>
                  )
            })}
            </Carousel>
        </Box>
    )
}

export default CarouselReel