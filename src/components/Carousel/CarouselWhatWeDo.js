import React, { Fragment } from 'react'

// Load components
import { Box, Image, Heading, useMediaQuery, keyframes } from '@chakra-ui/react'
import Carousel from './CustomCarousel'
import ProductSlide from '../ProductSlide/ProductSlide'

// Load assets
import LeftHandle from '../../img/leftHandle.svg'
import RightHandle from '../../img/rightHandle.svg'
import wirePrep from '../../img/wireprep.jpg'
import wiring from '../../img/wiring-harnesses.png'
import cable from '../../img/cable-assemblies.png'
import control from '../../img//control-panels.png'
//#152d71
//#10225a
//#091642

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`
export const SlideLeft = ({ onClick }) => {

    return (
        <Box cursor="pointer" onClick={onClick} right={{base: "60px", md: "80px", lg: "initial"}} bottom={{base: "205px",  md: "165px", lg: "initial"}}  height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}}  position="absolute">
            <Box position="relative" animation={`${flow} infinite 10s ease`} transition="all .5s ease-in-out" height={{base: "45px", md: "50px", lg: "59px"}} borderRadius="50%" width={{base: "45px", md: "50px", lg: "59px"}} background="gradient.200" _hover={{bg: "gradient.300",
            borderColor: "green.900",
            backgroundSize: "600% 600%",
            animation: `${flow} infinite 5s ease`}}>    
                <Image src={LeftHandle} alt="left icon" />
            </Box>
        </Box>  
    )
}

export const SlideRight = ({ onClick }) => {
    return (
        <Box cursor="pointer" onClick={onClick} right={{base: "0", lg: "-30px"}} bottom={{base: "205px", md: "165px", lg: "initial"}} height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}} position="absolute">
            <Box position="relative" animation={`${flow} infinite 10s ease`} transition="all .5s ease-in-out" height={{base: "45px", md: "50px", lg: "59px"}} borderRadius="50%" width={{base: "45px", md: "50px", lg:"59px"}} background="gradient.200" _hover={{bg: "gradient.300",
            borderColor: "green.900",
            backgroundSize: "600% 600%",
            animation: `${flow} infinite 5s ease`}}>
                <Image src={RightHandle} alt="right icon" />
            </Box>
        </Box>  
    )
}

const ButtonGroup = ({ next, previous }) => {
    return (
      <Box display={{base: "none", lg: "flex"}} position="absolute" top="50%" left="0" transform="translateY(-50%)" justifyContent="space-between" width="100%">
        <Box cursor="pointer" position="absolute" top="0" left="-5%" onClick={previous}>
        <Box position="relative" animation={`${flow} infinite 10s ease`} transition="all .5s ease-in-out" height="59px" borderRadius="50%" width="59px" background="gradient.200" _hover={{bg: "gradient.300",
            borderColor: "green.900",
            backgroundSize: "600% 600%",
            animation: `${flow} infinite 5s ease`}}>
                <Image src={LeftHandle} alt="left icon" />
            </Box>
        </Box>
        <Box cursor="pointer" position="absolute" top="0" right="-5%" onClick={next}>
            <Box position="relative" animation={`${flow} infinite 10s ease`} transition="all .5s ease-in-out" height="59px" borderRadius="50%" width="59px" background="gradient.200" _hover={{bg: "gradient.300",
            borderColor: "green.900",
            backgroundSize: "600% 600%",
            animation: `${flow} infinite 5s ease`}} >
                <Image src={RightHandle} alt="right icon" />
            </Box>
        </Box>
      </Box>
    );
  };

const CarouselWhatWeDo = () => {
    const [isLargerThan995] = useMediaQuery("(min-width: 990px)")
    return (
        <Fragment>
            <Heading textStyle="h1" marginBottom={{base: "40px", lg:"60px"}}>
                What we do?
            </Heading>
            <Carousel
            inifnite={true}
            arrows={isLargerThan995 ? false : true}
            desktopView={1}
            centerMode={false}
            partialVisible={false}
            renderButtonGroupOutside={isLargerThan995 ? true : false}
            customRightArrow={<SlideLeft />}
            customLeftArrow={<SlideRight />}
            customButtonGroup={<ButtonGroup />}
            >
                <ProductSlide
                heading="Wire Preparation"
                text="Wire and Cable Preparation produced in seconds using automatic high speed machinery."
                btnLink="/wire-and-cable-preparation"
                imgSrc={wirePrep}/>
                   
                <ProductSlide
                heading="Cable Assembly"
                text="Cable assemblies manufactured through the most efficient operations and highest quality standards."
                btnLink="/cable-assembly"
                imgSrc={cable}/>

                <ProductSlide
                heading="Wiring Harnesses"
                text="Wiring Looms and Harnesses made on a fast turnaround and delivered with 100% electrical testing."
                btnLink="/wiring-harness"
                imgSrc={wiring}/>
        
                <ProductSlide
                heading="Control Panels"
                text="Control Panels assembled in low and high volume by skilled and experienced panel wiring builders."
                btnLink="/control-panel"
                imgSrc={control}/>
            </Carousel>
        </Fragment>
    )
}

export default CarouselWhatWeDo
