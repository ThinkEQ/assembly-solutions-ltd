import React from 'react'
import {Box, Heading, Text } from '@chakra-ui/react'

const BannerLearnMore = () => {
    return (
        <Box as="section" textStyle="section" backgroundColor="green.900" minHeight={{base: "auto", md: "400px"}} display="flex" flexDirection="column" justifyContent="center" alignContent="center">
            <Box textAlign="center">
                <Heading as="h1" textStyle="h1" marginBottom="30px">
                    Ready to learn more?
                </Heading>
                <Text textStyle="p">
                    We believe in establishing great relationships with 
                    our customers.<br/>
                    Want to kick-off your journey?<br/> 
                    Get in touch with us on 01204 521999.
                </Text>
            </Box>
        </Box>
    )
}

export default BannerLearnMore