import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import { SlideLeft, SlideRight } from '../Carousel/Carousel'
import Button from '../../theme/button'

const ProductSlide = ({ heading, text, btnLink, imgSrc, imgAlt }) => {
    return (
        <Box display="flex" flexDirection={{base: "column-reverse", lg: "row"}} alignItems="center" justifyContent="space-around" width={{base: "100%", lg:"90%"}} margin="0 auto">
            <Box width={{base:"100%", lg:"40%"}}>
                <Heading textStyle="h2" display="flex" justifyContent="space-between" marginTop={{base: "20px", lg: "0"}}>
                    {heading}
                    <Box padding="0 4px" as="span" display={{base:"flex", lg: "none"}}>
                        <SlideLeft marginRight="10px" height="45px" width="45px" />
                        <SlideRight height="45px" width="45px" />
                    </Box>
                </Heading>
                <Text textStyle="p" marginBottom="40px">
                    {text}
                </Text>
                <Button>Learn more</Button>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" width={{base:"100%", lg:"40%"}}>
                <Image src={imgSrc} alt={imgAlt} borderRadius="8px" />
            </Box>
        </Box>
    )
}

export default ProductSlide