import React, { Fragment } from 'react'

// Load components
import { Box, Image, Heading, useMediaQuery } from '@chakra-ui/react'
import Carousel from './CustomCarousel'
import ProductSlide from '../ProductSlide/ProductSlide'

// Load assets
import LeftHandle from '../../img/leftHandle.svg'
import RightHandle from '../../img/rightHandle.svg'
import wirePrep from '../../img/wireprep.jpg'
import wiring from '../../img/wiring-harnesses.png'
import cable from '../../img/cable-assemblies.png'
import control from '../../img//control-panels.png'

export const SlideLeft = ({ onClick }) => {

    return (
        <Box cursor="pointer" onClick={onClick} right={{base: "60px", md: "80px", lg: "initial"}} bottom={{base: "205px",  md: "165px", lg: "initial"}}  height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}}  position="absolute">
            <Image src={LeftHandle} alt="left icon" />
        </Box>  
    )
}

export const SlideRight = ({ onClick }) => {
    return (
        <Box cursor="pointer" onClick={onClick} right={{base: "0", lg: "-30px"}} bottom={{base: "205px", md: "165px", lg: "initial"}} height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}} position="absolute">
            <Image src={RightHandle} alt="right icon" />
        </Box>  
    )
}

const ButtonGroup = ({ next, previous }) => {
    return (
      <Box display={{base: "none", lg: "flex"}} position="absolute" top="50%" left="0" transform="translateY(-50%)" justifyContent="space-between" width="100%">
        <Box cursor="pointer" position="absolute" top="0" left="-5%" onClick={previous}>
            <Image src={LeftHandle} alt="left icon" />
        </Box>
        <Box cursor="pointer" position="absolute" top="0" right="-5%" onClick={next}>
            <Image src={RightHandle} alt="right icon" />
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
                btnLink="/control-panels"
                imgSrc={control}/>
            </Carousel>
        </Fragment>
    )
}

export default CarouselWhatWeDo
