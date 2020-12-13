import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const CardNews = ({ title, date, imgSrc, imgAlt }) => {
    return (
        <Box borderRadius="4px" display="flex" flexDirection="column" background="#fff" height={{base: "370px", md:"470px"}} width="100%" overflow="hidden">
            <Box height="50%" width="100%" overflow="hidden">
                <Image src={imgSrc} alt={imgAlt} />
            </Box>
            <Box position="relative" display="flex" flexDirection="column" justifyContent="space-between" padding="6" height="50%">
                <Text textStyle="p">{title}</Text>
                <Text fontSize="16px" color="neutral.800">{date}</Text>
            </Box>
        </Box>
    )
}

export default CardNews