import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const TestimonialBlock = ({ quote, author }) => {
    return (
        <Box backgroundColor="blue.900" padding="8">
            <Text textStyle="p" color="#fff">
                {quote}
            </Text>
            {author &&
                <Text fontSize="16px" marginTop="20px" color="#fff">
                    {author}
                </Text>
            }
        </Box>
    )
}

export default TestimonialBlock