import React from 'react'

// Load components
import { Box, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react'

// Load asset
import ring from '../../../img/ring.svg'
import AstonMartin from '../../../img/brands/astonmarton.png'
import Brompton from '../../../img/brands/brompton.png'
import Ford from '../../../img/brands/ford.png'
import Siemens from '../../../img/brands/siemans.png'
import Stanley from '../../../img/brands/stanley.png'
import Vodafone from '../../../img/brands/vodafone.png'

const BannerOurCustomers = () => {
    return (
        <Box>
            <Box as="section" textStyle="section" maxWidth="1600px" margin="0 auto" display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" alignItems="flex-start">
                <Box width={{base: "100%", lg:"50%"}} marginBottom={{base: "50px", lg: "0"}}>
                    <Heading textStyle="h2" marginBottom="20px"> 
                        Our customers
                    </Heading>
                    <Text textStyle="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper neque vel dolor ultrices, sit amet porta odio semper. Morbi lacus purus, faucibus eu dolor non, aliquam scelerisque nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>

                <Box display="flex" alignSelf="center" justifyContent="space-between" height="100%" width={{base: "100%", md: "70%", lg:"40%"}}>
                    <Image src={ring} alt="circular" width="45%" />
                    <Image src={ring} alt="circular" width="45%" />
                </Box>
            </Box>
       
            <SimpleGrid columns={6} spacing={5} display={{base: "none", lg: "grid"}} alignItems="center" width="100%" paddingBottom="50px">
                <Image src={Ford} width="100%" alt="Ford brand" />
                <Image src={Stanley} width="100%" alt="Stanley brand" />
                <Image src={Brompton} width="100%" alt="Brompton brand" />
                <Image src={Vodafone} width="100%" alt="Vodafone brand" />
                <Image src={Siemens} width="100%" alt="Siemans brand" />
                <Image src={AstonMartin} width="100%" alt="AstonMartin brand" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={10} display={{base: "grid", lg: "none"}} alignItems="center" padding="50px 0">
                <Image src={Ford} width="100%" maxHeight={{base: "auto", md: "100px"}} objectFit="fill"  alt="Ford brand" />
                <Image src={Stanley} width="100%" objectFit="fill" maxHeight={{base: "auto", md: "100px"}} alt="Stanley brand" />
        </SimpleGrid>
        </Box>
    )
}

export default BannerOurCustomers