import React from 'react'

// Load hooks
import { useCarouselContext } from '../../hooks/useCarouselHook'
import { Slider, SliderTrack, Box, SliderThumb, SliderFilledTrack } from '@chakra-ui/react'


const SliderCustom = () => {
 const [currentSlide,  changeSlide] = useCarouselContext()

 return (
    <Box marginLeft={{base: "35px", md:"45px"}} padding="0 5px" width="80%" marginTop="10px">
        <Slider value={currentSlide} max={3} onChange={(value) => changeSlide(value)} focusThumbOnChange={false}>
            <SliderTrack background="neutral.700">
                <SliderFilledTrack background="neutral.700" color="neutral.700"  />
            </SliderTrack>
            <SliderThumb width={{base: "50px", md:"75px"}} height="5px" background="green.900" color="neutral.700" >
            </SliderThumb>
        </Slider>
    </Box>
 )
}

export default SliderCustom