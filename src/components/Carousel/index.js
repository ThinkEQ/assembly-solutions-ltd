import React from 'react'
import { CarouselProvider, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box, Image } from '@chakra-ui/react'

// Load assets
import LeftHandle from '../../img/leftHandle.svg'

export const SlideLeftReverse = (props) => {
    return (
        <Box {...props}>
         <ButtonNext>
            <Image src={LeftHandle} alt="left icon" />
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