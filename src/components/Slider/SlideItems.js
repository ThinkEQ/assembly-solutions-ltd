import React, { useState } from 'react'
import Draggable from 'react-draggable'

// Load components
import { Box, Heading, useMediaQuery, Slider, SliderTrack, SliderThumb, SliderFilledTrack  } from '@chakra-ui/react'
import CardArticle from '../Cards/CardArticle/CardArticle'

// Load asset
import stock from '../../img/stock.jpg'

const SlideItems = ({ title }) => {
    const [isLargerThan767] = useMediaQuery("(min-width: 767px)")
    const [position, setPosition] = useState('0')
    const [deltaPositions, setDelta] = useState({ x: 0, y: 0})

    function onControlledDrag(e, position) {
        const { x, y } = position
        setDelta({ x, y})

        const positive =-x
        setPosition(positive) 
    }

    function onSlide(value) {

        setPosition(value)
        setDelta({x: -value, y: 0})
    }

    return (
        <Box width="100%" padding={{base: "30px 0", lg: "0"}} background="gradient.400">
            <Box textStyle="section">
                <Box textStyle="container">
                    <Heading textStyle="h2" color="#fff">
                        {title}
                    </Heading>
                </Box>
            </Box>
            <Box textStyle="section" marginTop={{base: "-28px", lg: "-60px"}} marginLeft={{base: "0px", lg:"80px", xl: "16.5%"}}>
                <Draggable
                axis="x"
                position={deltaPositions}
                onDrag={onControlledDrag}
                bounds={{ right: 0, left: isLargerThan767 ? -1600 : -1100, top: 0, bottom: 0}}
                >
                <Box display="flex" justifyContent="space-between" width="100%"  minWidth={{base: "1400px", md: "2000px"}}>
                    <Box marginRight="25px">
                     <CardArticle imgSrc={stock} title="ASL 1 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box marginRight="25px">
                     <CardArticle imgSrc={stock} title="ASL 2 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box marginRight="25px">
                     <CardArticle imgSrc={stock} title="ASL 3 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                    <Box>
                     <CardArticle imgSrc={stock} title="ASL 4 Commercial Team Climb Ben Nevis" date="July 27, 2020 - ASL Team" />
                    </Box>
                </Box>
                </Draggable>
                <Box maxWidth={{base: "100%", lg: "80%"}} paddingTop="30px" marginLeft={{base: "25px", lg: "60px"}}>
                    <Slider value={position} min={0} max={isLargerThan767 ? 1600 : 1100} step={1} onChange={(value) => onSlide(value)} focusThumbOnChange={false}>
                    <SliderTrack background="neutral.700" height="1px">
                        <SliderFilledTrack background="neutral.700" color="neutral.700"  />
                    </SliderTrack>
                    <SliderThumb width={{base: "40px", lg:"120px"}} height="5px" background="green.900" color="neutral.700" />
                </Slider>
               </Box>
            </Box>           
        </Box>

    )
}
export default SlideItems