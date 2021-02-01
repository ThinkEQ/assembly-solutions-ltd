import React from 'react'
import Carousel from 'react-multi-carousel'

// Carousel styles
import 'react-multi-carousel/lib/styles.css';
import './styles.css'


const CarouselContainer = ({ children, desktopView = 2, tabletView = 1, mobileView = 1,  ...props }) => {

    const viewDisplay = { 1: 1, 2: 2, 3: 3}

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: viewDisplay[desktopView],
           // partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: viewDisplay[tabletView],
         //   partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: viewDisplay[mobileView],
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