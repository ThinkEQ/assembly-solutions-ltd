import React from 'react'

// Load components
import { Box, useMediaQuery, Image, keyframes } from '@chakra-ui/react'
import Carousel from './CustomCarousel'
import LeftHandle from '../../img/svg/leftHandle.svg'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

export const SlideLeft = ({ next }) => {

    return (
        <Box cursor="pointer" onClick={() => next()} top="50%" left={{base: "-50px", lg: "-80px"}}  height={{base:"45px", lg: "90px"}} width={{base: "45px", lg: "90px"}} transform="translateX(-50%)" position="absolute">
            <Box position="relative" animation={`${flow} infinite 10s ease`} transition="all .5s ease-in-out" height={{base: "45px", md: "50px", lg: "59px"}} borderRadius="50%" width={{base: "45px", md: "50px", lg: "59px"}} background="gradient.200" _hover={{bg: "gradient.300",
            borderColor: "green.900",
            backgroundSize: "600% 600%",
            animation: `${flow} infinite 5s ease`}}>    
                <Image src={LeftHandle} alt="left icon" />
            </Box>
        </Box>  
    )
}

const CarouselReel = ({ data }) => {
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
                  <Box width={{base: "75%", md: "98%"}} borderRadius="3px" overflow="hidden" cursor="grab" _active={{cursor: "grabbing"}} maxHeight="400px" height="100%">
                    <Box overflow="hidden" borderRadius="3px" height={{base: "210px", md: "100%"}} width={{base: "100%", md:"105%"}} transform="scale(1.1)" transformOrigin="0 0" transition=".6s ease-in-out" _hover={{transform: "scale(1)"}}>
                      <PreviewCompatibleImage imageInfo={img.image} borderRadius="3px" height="100%" width="98%" />
                    </Box>
                  </Box>
                  )
            })}
            </Carousel>
        </Box>
    )
}

export default CarouselReel