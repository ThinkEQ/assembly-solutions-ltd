import React from 'react'
import { Box, Text, Img, Icon } from '@chakra-ui/react'
import { FaPlayCircle } from 'react-icons/fa'

const CardVideo = ({ title, imgSrc, click}) => {
    return (
        <Box borderRadius="4px" onClick={click} display="flex" cursor="pointer" flexDirection="column" background="#fff" height={{base: "370px", md:"470px"}} width="100%" overflow="hidden">
            <Box height="50%" width="100%" position="relative" overflow="hidden">
                <figure>
                    <Img src={imgSrc} alt="youtube thumbnail" width="105%"  transform="scale(1.1)" filter="brightness(100%)" transition=".6s ease-in-out" _hover={{width: "95%", filter:"brightness(50%)"}} />
                </figure>
                <Box position="absolute" top="50%" left="50%" pointerEvents="none"  transform="translate(-50%, -50%)">
                    <Icon as={FaPlayCircle} color="green.900" fontSize="50px" />
                </Box>
            </Box>
            <Box position="relative" display="flex" flexDirection="column" justifyContent="space-between" padding="6" height="50%">
                <Text textStyle="p">{title}</Text>
            </Box>
        </Box>
    )
}

export default CardVideo