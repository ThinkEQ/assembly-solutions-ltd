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
    const [isLargerthan1600] = useMediaQuery("(min-width: 1600px)")
    const [isLargerThan767] = useMediaQuery("(min-width: 767px)")
    
    return (
        <Box width="100%" padding={{base: "30px 0", lg: "0"}} minHeight={{base: "550px", md: "700px"}} overflow="hidden" background="gradient.400">
            <Box textStyle="section">
                <Box textStyle="container">
                    <Heading textStyle="h2" color="#fff">
                        {title}
                    </Heading>
                </Box>
            </Box>
            <Box marginTop={{base: "8px", lg: "-30px"}} paddingRight={{base: "25px", lg: isLargerthan1600 ? "19%" : "11%"}} paddingLeft={{base: "25px", lg: isLargerthan1600 ? "19%" : "11%"}} marginRight="auto" marginLeft="auto">
            <Swiper
            spaceBetween={30}
            slidesPerView={isLargerThan767 ? 2 : 1}
            onSlideChange={(e) => console.log(e, 'slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            scrollbar={{ draggable: true }}
            >
            {data.length && data.map((item) => {
                const { frontmatter, fields } = item.node

                return (
                    <SwiperSlide>
                        <Box width="100%" maxWidth={{base: "300px", md: "100%"}} height="100%">
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

