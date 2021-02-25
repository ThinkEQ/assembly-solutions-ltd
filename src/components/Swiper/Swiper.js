import React from 'react'
import SwipeCore, { Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide, } from 'swiper/react'

// Load components
import { Box, Heading, useMediaQuery } from '@chakra-ui/react'
import CardArticle from '../Cards/CardArticle/CardArticle'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss';

import './styles.scss'

SwipeCore.use([Scrollbar, A11y])

const SwipeContainer = ({ data, title }) => {
    const [isLargerThan767] = useMediaQuery("(min-width: 767px)")
    
    return (
        <Box width="100%" padding="35px 0" textStyle="section" minHeight={{base: "550px", md: "700px", lg: "800px"}} overflow="hidden" background="gradient.400">
            <Box textStyle="container" paddingRight={{base: "25px", lg: "6.25rem"}} paddingLeft={{base: "25px", lg: "0rem"}}  marginRight="auto" marginLeft="auto">
                <Box margin={{base:"25px 0", lg: "50px 0"}} >
                    <Heading textStyle="h2" color="#fff">
                        {title}
                    </Heading>
                </Box>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={isLargerThan767 ? 2 : 1}
                    scrollbar={{ draggable: true }}
                    >
                    {data.length && data.map((item) => {
                        const { frontmatter, fields } = item.node

                        return (
                            <SwiperSlide>
                                <Box width="100%"  height="100%">
                                    <CardArticle title={frontmatter.title} slug={fields.slug} imgFluid={frontmatter.image} date={`${frontmatter.date} - ASL Team`} />
                                </Box>
                            </SwiperSlide> 
                        )
                        })}
                    </Swiper>
                    <div className="swiper-scrollbar" data-carousel-articles="scrollbar"></div>
            </Box>
        </Box>
    )
}

export default SwipeContainer

