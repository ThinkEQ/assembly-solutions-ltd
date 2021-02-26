import React from 'react'
import { Box, Text, Img, Icon, AspectRatio } from '@chakra-ui/react'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import { FaPlayCircle } from 'react-icons/fa'

const CardVideo = ({ title, imgSrc, click, imglocal }) => {
    return (
        <Box borderRadius="4px" onClick={click} display="flex" cursor="pointer" flexDirection="column" background="#fff" height={{base: "370px", md:"420px"}} width="100%" maxWidth="530px" overflow="hidden">
            <Box height="60%" width="100%" position="relative" overflow="hidden">
                <figure>
                    {!imglocal ?
                    <AspectRatio ratio={16 / 9}>
                        <Img src={`https://img.youtube.com/vi/${imgSrc}/hqdefault.jpg`} alt="youtube thumbnail"  height="230px"  width="105%" transform="scale(1.1)" filter="brightness(100%)"  transition=".6s ease-in-out" _hover={{width: "95%", filter:"brightness(50%)"}} />
                    </AspectRatio> :
                    <Box height="100%"  width="105%" transform="scale(1.1)" filter="brightness(100%)"  transition=".6s ease-in-out" _hover={{width: "95%", filter:"brightness(50%)"}}>
                        <PreviewCompatibleImage imageInfo={imglocal} height="100%" width="100%" />
                    </Box>}
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