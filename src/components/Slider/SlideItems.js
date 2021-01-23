import React, { useState } from 'react'
import Draggable from 'react-draggable'

// Load components
import { Box, Heading, useMediaQuery, Slider, SliderTrack, SliderThumb, SliderFilledTrack  } from '@chakra-ui/react'
import CardArticle from '../Cards/CardArticle/CardArticle'

const SlideItems = ({ title, data = [] }) => {
   
    
    const [isLargerThan767] = useMediaQuery("(min-width: 767px)")
    const [position, setPosition] = useState('0')
    const [deltaPositions, setDelta] = useState({ x: 0, y: 0})

    // Bounds
    const maxBounds = isLargerThan767 ? data.length * 400 : data.length * 250

    // Handle onDrag 
    function onControlledDrag(e, position) {
        const { x, y } = position
        setDelta({ x, y})

        const positive =-x
        setPosition(positive) 
    }

    // Handle thumb slider
    function onSlide(value) {
        setPosition(value)
        setDelta({x: -value, y: 0})
    }

     
    // Remove from page if no data
    if (data.length < 1) {
        return null
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
                bounds={{ right: 0, left: -maxBounds, top: 0, bottom: 0}}
                >
                <Box display="flex" justifyContent="space-between" width="100%">
                   {data.length && data.map((item, index) => {
                       const { frontmatter, fields } = item.node

                        if (index > 4) {
                            return null
                        }
                       return (
                           <Box width="100%" minWidth={{base:"300px", md: "535px"}} maxWidth={{base:"300px", md: "535px"}} marginRight="25px">
                                <CardArticle title={frontmatter.title} slug={fields.slug} imgFluid={frontmatter.image} date={`${frontmatter.date} - ASL Team`} />
                           </Box>
                       )
                   })}
                </Box>
                </Draggable>
                <Box maxWidth={{base: "100%", lg: "80%"}} paddingTop="30px" marginLeft={{base: "25px", lg: "60px"}}>
                    <Slider value={position} min={0} max={maxBounds} step={1} onChange={(value) => onSlide(value)} focusThumbOnChange={false}>
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
