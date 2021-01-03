import React from 'react'
import { Link as ReachLink } from 'gatsby'

import { Box, Text, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Pagination = ({ currentPage, totalPages, nextPage }) => {
    return (
        <Box display="flex" justifyContent="space-around">
            <Box backgroundColor="#fff" marginRight="10px" borderTop="2px" borderBottom="2px" padding="5px 30px" borderColor="green.900">
                <Text fontSize="16px">
                    {currentPage}
                </Text>
            </Box>
            <Box backgroundColor="blue.900" marginRight="10px" display="flex" alignItems="center" justifyContent="center"  padding="5px 30px">
                <Text fontSize="16px" color="#fff">
                    of {totalPages}
                </Text>
            </Box>
            <Box cursor="pointer" display="flex" alignItems="center" justifyContent="center" backgroundColor="blue.900" padding="5px 25px">
                <Link as={ReachLink} to={nextPage}>
                    <ArrowForwardIcon fontSize="25px" color="#fff" />
                </Link>
            </Box>
        </Box>
    )
}

export default Pagination