import React, { Fragment } from 'react'

// Load components
import { Box, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react'
import Carousel from '../../Carousel/CustomCarousel'
import 'react-circular-progressbar/dist/styles.css';
import Svg from '../../UI/SVG/index'

// Load asset
import AstonMartin from '../../../img/brands/astonmarton.png'
import Brompton from '../../../img/brands/brompton.png'
import Ford from '../../../img/brands/ford.png'
import Siemens from '../../../img/brands/siemans.png'
import Stanley from '../../../img/brands/stanley.png'
import Vodafone from '../../../img/brands/vodafone.png'
import Google from '../../../img/reviews/google.svg'

// Progress style config
// const styles = {
//     path: {
//         // Path color
//         stroke: `url(#linearGradient)`,
//         // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//         strokeLinecap: 'round',
//         // Customize transition animation
//         transition: 'stroke-dashoffset 3s ease 0s',
//         // Rotate the path
//         transform: 'rotate(0.95turn)',
//         transformOrigin: 'center center',
//       },
//     // Customize the circle behind the path, i.e. the "total progress"
//     trail: {
//         // Trail color
//         stroke: '#505050',
//         // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
//         strokeLinecap: 'round',
//         // Rotate the trail
//         transform: 'rotate(0.25turn)',
//         transformOrigin: 'center center',
//       }
// }

// Progress bars circular
// const ProgressBar = ({text, value}) => {
//     const props = useSpring({ number: value, from: { number: 0 }, config: config.molasses })
//     return (
//     <CircularProgressbarWithChildren value={value} styles={styles} maxValue={105}>
//             <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignItems="center" marginTop="12px">
//                 <Text  fontSize="25px" color="#171717" fontWeight="bold" position="relative">
//                     <animated.span>{props.number.interpolate(x => x.toFixed(0))}</animated.span>%
//                 </Text>
//                 <Text textAlign="center" lineHeight="20px" color="#171717" fontWeight="bold"  fontSize={{base: "15px", md:"20px"}}>Customer <br/>{text}</Text>
//             </Box>
//     </CircularProgressbarWithChildren>
//     )
// }

const BannerOurCustomers = () => {
    const [isLessThan464] = useMediaQuery("(max-width: 464px")
   
    return (
        <Fragment>
            <Box padding="30px 0">
             <Box display="flex" textStyle="section" flexDirection={{base: "column", lg: "row"}} maxWidth="1600px" margin="0 auto"  justifyContent="space-between" alignItems="flex-start">
                <Box width={{base: "100%", lg:"50%"}} marginBottom={{base: "50px", lg: "0"}}>
                    <Heading textStyle="h2" marginBottom="20px">
                        Our customers
                    </Heading>
                    <Text textStyle="p">
                    Our customers are a true reflection of the quality and service that we deliver. With a satisfaction score of 98% and partnerships with world class companies including Ford and Siemens, we are extremely proud but also motivated to maintain these high standards.
                    </Text>
                    <Image src={Google} pointerEvents="none" alt="Google reviews" />
                </Box>
                <Box display="flex" alignSelf="center" justifyContent="space-around" height="100%" width={{base: "100%", lg:"40%"}}>
                    <Box width="48%" maxW="200px">
                       <Svg name="satisfaction" height="100%" width="100%" />
                    </Box>
                    <Box width="48%" maxW="200px">
                        <Svg name="retention" height="100%" width="100%" />
                    </Box>
                </Box>
            </Box>

            <Box width="100%" padding="50px 0">
                <Carousel
                    autoPlay={true}
                    draggable={false}
                    autoPlaySpeed={2000}
                    centerMode={isLessThan464 ? false : true}
                    arrows={false}
                    desktopView={3}
                    tabletView={2}
                    mobileView={2}
                >
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Ford} pointerEvents="none" width="100%" alt="Ford brand" /></Box>
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Stanley} pointerEvents="none" width="100%" alt="Stanley brand" /></Box>
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Brompton} pointerEvents="none" width="100%" alt="Brompton brand" /></Box>
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Vodafone} pointerEvents="none" width="100%" alt="Vodafone brand" /></Box>
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={Siemens} pointerEvents="none" width="100%" alt="Siemans brand" /></Box>
                    <Box width={{base: "90%", md:"75%"}} height="100%" display="flex" alignItems="center" justifyContent="center"><Image src={AstonMartin} pointerEvents="none" width="100%" alt="AstonMartin brand" /></Box>
                </Carousel>
                </Box>
            </Box>
        </Fragment>
    )
}

export default BannerOurCustomers