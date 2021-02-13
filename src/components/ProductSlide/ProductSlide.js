import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Button from '../../theme/button'
import { navigate } from 'gatsby-link'
import Img from 'gatsby-image'

const ProductSlide = ({ heading, text, btnLink, imgSrc, imgAlt }) => {
    const maxHeight = imgSrc.fluid.presentationHeight
    const imageStyle = { maxHeight, width: "100%", height: "100%", borderRadius: "8px" }
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
            <Box display="flex" justifyContent="center" alignItems="flex-start" maxHeight={{base: "300px", md: "450px"}} width={{base:"100%", lg:"50%"}} height="450px" maxW={{base: "100%", lg: "553px"}}>
                 <Img draggable={false} style={imageStyle} fluid={imgSrc.fluid} alt={imgAlt} />
            </Box>
        </Box>
    )
}

export default ProductSlide