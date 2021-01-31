import React, { useState } from 'react'

// Load components
import { Box, Heading, Text } from '@chakra-ui/react'
import { useSpring, animated, config } from 'react-spring'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import 'react-circular-progressbar/dist/styles.css';

// Progress style config
const styles = {
    path: {
        // Path color
        stroke: `url(#linearGradient)`,
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Customize transition animation
        transition: 'stroke-dashoffset 3s ease 0s',
        // Rotate the path
        transform: 'rotate(0.95turn)',
        transformOrigin: 'center center',
      },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
        // Trail color
        stroke: '#505050',
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'round',
        // Rotate the trail
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      }
}

// Progress bars circular
const ProgressBar = ({text, value}) => {
    const props = useSpring({ number: value, from: { number: 0 }, config: config.molasses })
    return (
    <CircularProgressbarWithChildren value={value} styles={styles} maxValue={105}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignItems="center" marginTop="12px">
                <Text  fontSize="25px" color="#171717" fontWeight="bold" position="relative">
                    <animated.span>{props.number.interpolate(x => x.toFixed(0))}</animated.span>%
                </Text>
                <Text textAlign="center" lineHeight="20px" color="#171717" fontWeight="bold"  fontSize={{base: "15px", md:"20px"}}>Customer <br/>{text}</Text>
            </Box>
    </CircularProgressbarWithChildren>
    )
}

const BannerOurCustomers = () => {
    const [vs, setVs] = useState(0)
    const [vr, setVr] = useState(0)

    function setValues(isVisible) {
       
        // Check we are in the viewport
        if (isVisible) {
            setVs(99)
            setVr(98)
        }
    }

    return (
        <VisibilitySensor onChange={setValues}>
            <Box display="flex" flexDirection={{base: "column", lg: "row"}} justifyContent="space-between" alignItems="flex-start">
                <Box width={{base: "100%", lg:"50%"}} marginBottom={{base: "50px", lg: "0"}}>
                    <Heading textStyle="h2" marginBottom="20px"> 
                        Our customers
                    </Heading>
                    <Text textStyle="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper neque vel dolor ultrices, sit amet porta odio semper. Morbi lacus purus, faucibus eu dolor non, aliquam scelerisque nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Box>

                <Box display="flex" alignSelf="center" justifyContent="space-around" height="100%" width={{base: "100%", lg:"40%"}}>
                    <Box width="45%" maxW="180px">
                        <ProgressBar text="Satisfaction"  value={vs} />
                    </Box>
                    <Box width="45%" maxW="180px">
                        <ProgressBar text="Retention" value={vr} />
                    </Box>
                </Box>
            </Box>
        </VisibilitySensor>
    )
}

export default BannerOurCustomers