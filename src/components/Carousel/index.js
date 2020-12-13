import React from 'react'
import { CarouselProvider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ children, setHeight, setWidth, hildren, totalSlides, ...props }) => {
    return (
        <CarouselProvider naturalSlideWidth={setHeight} naturalSlideHeight={setWidth} totalSlides={totalSlides} orientation="horizontal" {...props}>
            {children}
        </CarouselProvider>
    )
}

export default Carousel