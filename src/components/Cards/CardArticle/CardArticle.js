import React from 'react'
import { navigate } from 'gatsby'
import { Box, Image, Text } from '@chakra-ui/react'
import PreviewImage from '../../PreviewCompatibleImage'

const CardArticle = ({ title, date, imgSrc = false, imgAlt, imgFluid = false, slug = '#' }) => {

    function nav() {
          return navigate(slug)
    }
    return (
        <Box cursor="grab" _active={{cursor: "grabbing"}} borderRadius="4px" display="flex" flexDirection="column" background="#fff" height={{base: "370px", md:"470px"}} width="100%" overflow="hidden">
            <Box height="50%" width="100%" overflow="hidden">
                {imgSrc && <Image src={imgSrc} alt={imgAlt} />}
                {imgFluid && <PreviewImage imageInfo={imgFluid} />}
            </Box>
            <Box position="relative" display="flex" flexDirection="column" justifyContent="space-between" padding="6" height="50%">
                <Text onClick={nav} textStyle="p" _hover={{textDecoration: "underline"}} cursor="pointer">{title}</Text>
                {date && <Text fontSize="16px" color="neutral.800">{date}</Text>}
            </Box>
        </Box>
    )
}

export default CardArticle