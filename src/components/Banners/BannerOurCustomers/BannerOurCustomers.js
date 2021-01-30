import React from 'react'

// Load components
import { Box, Heading, Text, Image, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import Carousel from '../../Carousel/CustomCarousel'

// Load asset
import ring from '../../../img/ring.svg'
import AstonMartin from '../../../img/brands/astonmarton.png'
import Brompton from '../../../img/brands/brompton.png'
import Ford from '../../../img/brands/ford.png'
import Siemens from '../../../img/brands/siemans.png'
import Stanley from '../../../img/brands/stanley.png'
import Vodafone from '../../../img/brands/vodafone.png'

const BannerOurCustomers = () => {
    const [isLessThan464] = useMediaQuery("(max-width: 464px")
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

          <Box width="100%" padding="50px 0">
            <Carousel
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={isLessThan464 ? false : true}
                arrows={false}
                desktopView={3}
                tabletView={3}
                mobileView={2}
            >
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Ford} width="100%" alt="Ford brand" /></Box>
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Stanley} width="100%" alt="Stanley brand" /></Box>
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Brompton} width="100%" alt="Brompton brand" /></Box>
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Vodafone} width="100%" alt="Vodafone brand" /></Box>
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Siemens} width="100%" alt="Siemans brand" /></Box>
                <Box width={{base: "90%", lg:"70%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={AstonMartin} width="100%" alt="AstonMartin brand" /></Box>
            </Carousel>
          </Box>
        </Box>
    )
}

export default BannerOurCustomers