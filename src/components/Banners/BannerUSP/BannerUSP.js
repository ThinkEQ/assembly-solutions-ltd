import React from 'react'

// Load components
import { Box, Heading, Image, Text } from '@chakra-ui/react'

// Load assets
import Fast from '../../../img/fast.svg'
import User from '../../../img/user-2.svg'
import Hand from '../../../img/hand.svg'
import Stars from '../../../img/stars.svg'

const Group = ({ text, icon, altText }) => {
    return (
        <Box display="flex" justifyContent="space-between" flexDirection="column" alignItems="center" marginBottom={{base: "50px", lg: "0"}} width={{base: "48%", lg: "24%"}}>
            <Image src={icon} alt={altText} height={{base:"80px", md: "110px"}} />
            <Text fontSize={{base: "18px", md:"30px"}} textAlign="center" fontWeight="bold" marginTop={{base: "30px", md:"50px"}} >
                {text}
            </Text>
        </Box>
    )
}

const BannerUSP = () => {
    return (
        <Box textStyle="container">
            <Heading textStyle="h2" marginBottom="20">
                Why buy from us?
            </Heading>
            <Box display="flex" justifyContent={{base: "space-between", md:"space-between"}} alignItems="center" flexWrap="wrap">
                <Group icon={Hand} text="Quality Assurance" altText="hand icon" />
                <Group icon={User} text="Family Business" altText="user icon" />
                <Group icon={Fast} text="Fast Delivery" altText="van icon" />
                <Group icon={Stars} text="Excellent Service" altText="starts group icon" />
            </Box>
        </Box>
    )
}

export default BannerUSP