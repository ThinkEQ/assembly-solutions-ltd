import React, { Fragment } from 'react'

// Load components
import { Box, Image, Heading } from '@chakra-ui/react'
import Carousel from './CustomCarousel'
import ProductSlide from '../ProductSlide/ProductSlide'

// Load assets
import LeftHandle from '../../img/leftHandle.svg'
import RightHandle from '../../img/rightHandle.svg'
import stockCable from '../../img/stockWire.jpg'

export const SlideLeft = ({ onClick }) => {
    return (
        <Box {...props} cursor="pointer" right={{base: "70px", md: "80px", lg: "initial"}} bottom={{base: "205px",  md: "165px", lg: "initial"}}  height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}}  position="absolute">
            <Image src={LeftHandle} alt="left icon" />
        </Box>  
    )
}

export const SlideRight = ({ onClick }) => {
    return (
        <Box cursor="pointer" {...props} right={{base: "0", lg: "-30px"}} bottom={{base: "205px", md: "165px", lg: "initial"}} height={{base:"55px", md: "60px", lg: "90px"}} width={{base: "45px", md: "55px", lg: "90px"}} position="absolute">
            <Image src={RightHandle} alt="right icon" />
        </Box>  
    )
}

const CarouselWhatWeDo = () => {
    return (
        <Fragment>
            <Heading textStyle="h1" marginBottom={{base: "40px", lg:"60px"}}>
                What we do?
            </Heading>
            <Carousel
            inifnite={true}
            arrows={true}
            desktopView={1}
            centerMode={false}
            partialVisible={false}
            customRightArrow={<SlideLeft />}
            customLeftArrow={<SlideRight />}
            >
                <ProductSlide
                heading="Wire Preparation"
                text="Wire and Cable Preparation produced in seconds using automatic high speed machinery."
                btnLink="/wire-and-cable-preparation"
                imgSrc={stockCable}/>
                   
                <ProductSlide
                heading="Cable Assembly"
                text="Cable assemblies manufactured through the most efficient operations and highest quality standards."
                btnLink="/cable-assembly"
                imgSrc={stockCable}/>

                <ProductSlide
                heading="Wiring Harnesses"
                text="Wiring Looms and Harnesses made on a fast turnaround and delivered with 100% electrical testing."
                btnLink="/wiring-harness"
                imgSrc={stockCable}/>
        
                <ProductSlide
                heading="Control Panels"
                text="Control Panels assembled in low and high volume by skilled and experienced panel wiring builders."
                btnLink="/control-panel"
                imgSrc={stockCable}/>
            </Carousel>
        </Fragment>
    )
}

export default CarouselWhatWeDo
