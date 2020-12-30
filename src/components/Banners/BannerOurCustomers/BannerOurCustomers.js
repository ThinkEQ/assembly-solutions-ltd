import React from 'react'

// Load components
import { Box, Heading, Text, Image } from '@chakra-ui/react'

// Load asset
import ring from '../../../img/ring.svg'

const BannerOurCustomers = () => {
    return (
        <Box display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" alignItems="flex-start">
            <Box width={{base: "100%", lg:"50%"}} marginBottom={{base: "50px", lg: "0"}}>
                <Heading textStyle="h2" marginBottom="20px"> 
                    Our customers
                </Heading>
                <Text textStyle="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper neque vel dolor ultrices, sit amet porta odio semper. Morbi lacus purus, faucibus eu dolor non, aliquam scelerisque nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </Box>

            <Box display="flex" alignSelf="center" justifyContent="space-between" height="100%" width={{base: "100%", lg:"40%"}}>
                <Image src={ring} alt="circular" width="45%" />
                <Image src={ring} alt="circular" width="45%" />
            </Box>
        </Box>
    )
}

export default BannerOurCustomers