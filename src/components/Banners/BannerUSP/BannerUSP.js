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
        <Box display="flex" justifyContent="space-between" flexDirection="column" alignItems="center" marginBottom={{base: "50px", xl: "0"}} minWidth={{base: "100%", md:"50%", lg: "25%"}}>
            <Image src={icon} alt={altText} height="110px" />
            <Text fontSize="30px" fontWeight="bold" marginTop="50px">
                {text}
            </Text>
        </Box>
    )
}

const BannerUSP = () => {
    return (
        <Box textStyle="section">
            <Heading textStyle="h2" marginBottom="20">
                Why buy from us?
            </Heading>
            <Box display="flex" justifyContent={{base: "center", sm: "space-between", md:"space-around"}} alignItems="center" flexWrap="wrap">
                <Group icon={Hand} text="Quality Assurance" altText="hand icon" />
                <Group icon={User} text="Family Business" altText="user icon" />
                <Group icon={Fast} text="Fast Delivery" altText="van icon" />
                <Group icon={Stars} text="Excellent Service" altText="starts group icon" />
            </Box>
        </Box>
    )
}

export default BannerUSP