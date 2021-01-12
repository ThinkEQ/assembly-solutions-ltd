import React, { Fragment, useState } from 'react'

// Load components
import { Box, Heading, useMediaQuery, Slider, SliderTrack, SliderThumb, SliderFilledTrack  } from '@chakra-ui/react'
import CardNews from '../Cards/CardNews/CardNews'

// Load asset
import stock from '../../img/stock.jpg'

const CarouselNews = () => {
    const [isLargerThan1600] = useMediaQuery("(min-width: 1600px)")
    const [position, setPosition] = useState('0')
    return (
        <Fragment>
            <Box width="100%" height={{base: "240px", md:"340px"}} textStyle="section" background="blue.900">
                <Box textStyle="container">
                    <Heading textStyle="h2" color="#fff">
                        Latest News
                    </Heading>
                </Box>
            </Box>
            <Box  width="100%" height={{base: "340px", md:"440px"}} background="neutral.900" />
    
            <Box position="absolute" height="600px" top={{base: "70%", md:"60%"}} left="0" width="100%" transform="translateY(-50%)">
                <Box display="flex" marginLeft={isLargerThan1600 ? "18%" : "11%"} justifyContent="space-between" width="100%"  minWidth={{base: "1400px", lg: "2000px"}} transform={`translateX(-${position}px)`}>
                    <Box marginRight="25px">
                     <CardNews imgSrc={stock} title="ASL 1 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box marginRight="25px">
                     <CardNews imgSrc={stock} title="ASL 2 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box marginRight="25px">
                     <CardNews imgSrc={stock} title="ASL 3 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box>
                     <CardNews imgSrc={stock} title="ASL 4 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                </Box>
                <Box maxWidth="60%" paddingTop="50px" margin="0 auto">
                    <Slider value={position} min={0} max={isLargerThan1600 ? 1600 : 1100} step={1} onChange={(value) => setPosition(value)} focusThumbOnChange={false}>
                    <SliderTrack background="neutral.700">
                        <SliderFilledTrack background="neutral.700" color="neutral.700"  />
                    </SliderTrack>
                    <SliderThumb width={{base: "50px", md:"75px"}} height="5px" background="green.900" color="neutral.700" />
                </Slider>
               </Box>
            </Box>           
        </Fragment>

    )
}

// const CarouselNews = () => {
//     const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
//     const [isLargerThan1600] = useMediaQuery("(min-width: 1600px)")
//     return (
//         <Fragment>
//             <Box width="100%" height={{base: "240px", md:"440px"}} textStyle="section" background="blue.900">
//                 <Box textStyle="container">
//                     <Heading textStyle="h2" color="#fff">
//                         Latest News
//                     </Heading>
//                 </Box>
              
//             </Box>
//             <Box  width="100%" height={{base: "340px", md:"440px"}} background="neutral.900" />
//                 <Box height="600px" overflow="auto" width="100%" minWidth={{base: "100%", lg: "1600px"}}  position="absolute" top={{base: "70%", md:"60%"}} left={{base:"0", lg: isLargerThan1600 ? "18%" : "5%"}} transform="translateY(-50%)">
//                     <Carousel isIntrinsicHeight totalSlides={5} visibleSlides={isLargerThan900 ? 3 : 1} setHeight={550} setWidth={550}>
//                         <Slider >
//                             <Slide index={0} style={{padding: "10px"}}>
//                                 <CardNews imgSrc={stock} title="ASL 1 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
//                             </Slide>
//                             <Slide index={1} style={{padding: "10px"}}>
//                                 <CardNews imgSrc={stock} title="ASL 2 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
//                             </Slide>
//                             <Slide index={2} style={{padding: "10px"}}>
//                                 <CardNews imgSrc={stock} title="ASL 3 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
//                             </Slide>
//                             <Slide index={3} style={{padding: "10px"}}>
//                                 <CardNews imgSrc={stock} title="ASL 4 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
//                             </Slide>
//                         </Slider>
//                         <CustomSlide />
//                     </Carousel>
//                 </Box> 
//         </Fragment>

//     )
// }

export default CarouselNews