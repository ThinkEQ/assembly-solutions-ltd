import React from 'react'
import {Box, Heading, Text } from '@chakra-ui/react'

const BannerLearnMore = () => {
    return (
        <Box as="section" textStyle="section" backgroundColor="green.900">
            <Box textAlign="center">
                <Heading as="h1" textStyle="h1" marginBottom="30px">
                    Ready to learn more?
                </Heading>
                <Text textStyle="p" >
                    At ASL, we believe in establishing great relationships with <br/> 
                    our customers. Want to kick-off your journey? Get in <br/>
                    touch with us on 01204 521999.  
                </Text>
            </Box>
        </Box>
    )
}

export default BannerLearnMore