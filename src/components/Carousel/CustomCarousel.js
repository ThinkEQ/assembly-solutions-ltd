import React from 'react'
import Carousel from 'react-multi-carousel'

// Carousel styles
import 'react-multi-carousel/lib/styles.css';
import './styles.css'


const CarouselContainer = ({ children, ...props }) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
           // partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
         //   partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 50 // this is needed to tell the amount of px that should be visible.
          }
    }

    return (
        <Carousel
            infinite={true}
            ssr={true}
            responsive={responsive}
            {...props}
        >
            {children}
        </Carousel>
    )
}

export default CarouselContainer