import React, { Fragment } from 'react'
import { ButtonBack, ButtonNext, Slide, Slider} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

// Load components
import { Box, Image, Heading } from '@chakra-ui/react'
import Carousel from './index'
import ProductSlide from '../ProductSlide/ProductSlide'

// Load assets
import LeftHandle from '../../img/leftHandle.svg'
import RightHandle from '../../img/rightHandle.svg'
import stockCable from '../../img/stockWire.jpg'

export const SlideLeft = (props) => {
    return (
        <Box {...props}>
         <ButtonBack>
            <Image src={LeftHandle} alt="left icon" />
         </ButtonBack>
        </Box>  
    )
}

export const SlideRight = (props) => {
    return (
        <Box {...props}>
         <ButtonNext>
            <Image src={RightHandle} alt="right icon" />
         </ButtonNext>
        </Box>  
    )
}

/**
 * @todo Static Query + props for data source
 */
const CarouselWhatWeDo = () => {
    return (
        <Fragment>
            <Heading textStyle="h1" marginBottom={{base: "40px", lg:"60px"}}>
                What we do?
            </Heading>
            <Carousel totalSlides={3} isIntrinsicHeight infinite setHeight={100} setWidth={100}>
                <Slider >
                    <Slide index={0}>
                    <ProductSlide
                        heading="Cable Assembly"
                        text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                        imgSrc={stockCable}
                    />
                    </Slide>
                    <Slide index={1}>
                    <ProductSlide
                        heading="Mock Slide"
                        text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                        imgSrc={stockCable}
                    />
                    </Slide>
                    <Slide index={3}>
                    <ProductSlide
                    heading="Mock Slide - 2"
                    text="With an IPC A-620 fully trained workforce, we guarantee low costs and high quality on all our cable assembly manufacture."
                    imgSrc={stockCable}
                    />
                </Slide>
                </Slider>
                <SlideLeft position="absolute" top="50%" left="0px" transform="translateY(-50%)" display={{base: "none", lg: "block"}}  />
                <SlideRight position="absolute" top="50%" right="0px" transform="translateY(-50%)" display={{base: "none", lg: "block"}} />
            </Carousel>
        </Fragment>
    )
}

export default CarouselWhatWeDo