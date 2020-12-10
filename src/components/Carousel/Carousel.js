import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import {CarouselProvider, ButtonBack, ButtonNext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

// Load assets
import LeftHandle from '../../img/leftHandle.svg'
import RightHandle from '../../img/rightHandle.svg'

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

const Carousel = ({ children, setHeight, setWidth, hildren, totalSlides, ...props }) => {
    return (
        <CarouselProvider naturalSlideWidth={setHeight} naturalSlideHeight={setWidth} totalSlides={totalSlides} orientation="horizontal" {...props}>
            {children}
        </CarouselProvider>
    )
}

export default Carousel