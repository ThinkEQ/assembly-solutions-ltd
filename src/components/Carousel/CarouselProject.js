import React, { Fragment } from 'react'

// Load components
import { Slider, Slide } from 'pure-react-carousel'
import { Box, Heading, useMediaQuery } from '@chakra-ui/react'
import Carousel from './index'
import CardNews from '../Cards/CardNews/CardNews'
import CustomSlide from '../Slider/Slider'

// Load asset
import stock from '../../img/stock.jpg'

/**
 * @todo
 * State quieries
 */
const CarouselProject = () => {
    const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
    return (
        <Fragment>
            <Box width="100%" height={{base: "240px", md:"440px"}} textStyle="section" background="blue.900">
                <Heading textStyle="h2" color="#fff">
                    Related Projects
                </Heading>
            </Box>
            <Box  width="100%" height={{base: "340px", md:"440px"}} background="neutral.900" />
            <Box height="600px" overflow="auto" width="100%" position="absolute" top={{base: "70%", md:"60%"}} left={{base:"0", lg:"10%"}} transform="translateY(-50%)">

            <Carousel isIntrinsicHeight totalSlides={5} visibleSlides={isLargerThan900 ? 3 : 1} setHeight={400} setWidth={400}>
                <Slider >
                    <Slide index={0} style={{padding: "10px"}}>
                    <CardNews imgSrc={stock} title="ASL 1 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Slide>
                    <Slide index={1} style={{padding: "10px"}}>
                    <CardNews imgSrc={stock} title="ASL 2 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Slide>
                    <Slide index={2} style={{padding: "10px"}}>
                    <CardNews imgSrc={stock} title="ASL 3 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Slide>
                    <Slide index={3} style={{padding: "10px"}}>
                    <CardNews imgSrc={stock} title="ASL 4 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Slide>
                </Slider>
                <CustomSlide />
            </Carousel>
            </Box>
        </Fragment>

    )
}

export default CarouselProject