import React from 'react'

// Load components
import { Box, Heading, Text, Image } from '@chakra-ui/react'

// Load asset
import ring from '../../../img/ring.svg'

const BannerOurCustomers = () => {
    return (
        <Box width="100%" height="100%">
            <Box display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" alignItems="flex-start" textStyle="section">
                <Box width={{base: "100%", lg:"50%"}} marginBottom={{base: "50px", lg: "0"}}>
                    <Heading textStyle="h2" marginBottom="20px"> 
                        Our customers
                    </Heading>
                    <Text textStyle="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper neque vel dolor ultrices, sit amet porta odio semper. Morbi lacus purus, faucibus eu dolor non, aliquam scelerisque nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>

                <Box display="flex" alignSelf="center" height="100%">
                    <Image src={ring} alt="circular" marginRight="20px" />
                    <Image src={ring} alt="circular" />
                </Box>
            </Box>
        </Box>
    )
}

export default BannerOurCustomers