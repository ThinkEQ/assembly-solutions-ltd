import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import { SlideLeft, SlideRight } from '../Carousel/CarouselWhatWeDo'
import Button from '../../theme/button'
import { navigate } from 'gatsby-link'

const ProductSlide = ({ heading, text, btnLink, imgSrc, imgAlt }) => {
    return (
        <Box display="flex" cursor="grab" _active={{cursor: "grabbing"}} flexDirection={{base: "column-reverse", lg: "row"}} alignItems="center" justifyContent="space-around" width={{base: "100%", lg:"90%"}} margin="0 auto">
            <Box width={{base:"100%", lg:"40%"}}>
                <Heading textStyle="h2" display="flex" justifyContent="space-between" marginTop={{base: "20px", lg: "0"}}>
                    {heading}
                    <Box padding="0 4px" as="span" height="45px" width="90px" display={{base:"flex", lg: "none"}} />
                </Heading>
                <Text textStyle="p" marginBottom="40px">
                    {text}
                </Text>
                <Button onClick={() => navigate(btnLink)}>Learn More</Button> 
            </Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" width={{base:"100%", lg:"40%"}}>
                <Image src={imgSrc} alt={imgAlt} draggable={false} borderRadius="8px" />
            </Box>
        </Box>
    )
}

export default ProductSlide