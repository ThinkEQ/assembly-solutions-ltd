import React from 'react'
import { navigate } from 'gatsby'
import { Box, Image, Text } from '@chakra-ui/react'
import PreviewImage from '../../PreviewCompatibleImage'

const CardArticle = ({ title, date, imgSrc = false, imgAlt, imgFluid = false, slug = '#' }) => {

    function nav() {
          return navigate(slug)
    }
    return (
        <Box onClick={nav} cursor="grab" _active={{cursor: "grabbing"}} borderRadius="4px" display="flex" flexDirection="column" background="#fff" height={{base: "370px", md:"470px", lg: "535px"}} width="100%" overflow="hidden">
            <Box height="50%" width="100%" overflow="hidden" transform="scale(1.1)" filter="brightness(100%)" transition=".6s ease-in-out" _hover={{width: "96%", filter:"brightness(50%)"}}>
            <figure>
                {imgSrc && <Image src={imgSrc} alt={imgAlt} draggable="false"  width="105%" transform="scale(1.1)" filter="brightness(100%)" transition=".6s ease-in-out" _hover={{width: "95%", filter:"brightness(50%)"}} />}
                {imgFluid && <PreviewImage imageInfo={imgFluid}  minHeight="255px" width="105%"  transform="scale(1.1)" filter="brightness(100%)" transition=".6s ease-in-out" hover={{width: "95%", filter:"brightness(50%)"}} />}
            </figure>
            </Box>
            <Box position="relative" display="flex" flexDirection="column" justifyContent="space-between" padding="6" height="50%">
                <Text textStyle="p" _hover={{textDecoration: "underline"}} cursor="pointer">{title}</Text>
                {date && <Text fontSize="16px" color="neutral.800">{date}</Text>}
            </Box>
        </Box>
    )
}

export default CardArticle