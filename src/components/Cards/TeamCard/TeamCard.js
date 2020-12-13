import React from 'react'
import { Link as ReachLink } from 'gatsby'

// Load components
import { Text, Heading, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, Link } from '@chakra-ui/react'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import SVG from '../../UI/SVG/index'
import { HTMLContent } from '../../Content'

const TeamCard = ({ teamImg, name, jobTitle, bio, linkedIn, iconList}) => {
    return (
        <Box maxWidth="250px">
            <Popover placement="auto" trigger="click" autoFocus={false}>
                <PopoverTrigger>
                    <Box>
                        <PreviewCompatibleImage imageInfo={teamImg} />
                        <Text textStyle="p">
                            {name}
                        </Text>
                        <Text textStyle="p">
                        {jobTitle}
                        </Text>
                    </Box>
                </PopoverTrigger>
                <PopoverContent  borderRadius="0">
                    <PopoverHeader display="flex" justifyContent="space-between" alignItems="center" border="none" borderColor="blue.900" backgroundColor="blue.900">
                        <Heading as="h2" fontSize="35px" lineHeight="42px" color="#fff">
                            About {name}
                        </Heading>
                        <Box maxHeight="50px" maxWidth="50px">
                            <Link as={ReachLink} to={linkedIn} target="_blank" isExternal>
                                <SVG name="linkedin" />
                            </Link>
                        </Box>
                    </PopoverHeader>
                    <PopoverBody>
                        <Box display="flex" justifyContent="space-between">
                            <Box width="80%">
                                <HTMLContent content={bio} />
                            </Box>
                            <Box width="20%">
                            {iconList.length > 0 &&
                                iconList.map((icon) => {
                                   return <Text textTransform="capitalize" textStyle="p">{icon}</Text>
                                })}
                            
                            </Box>
                        </Box>
                      
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>

    )
}

export default TeamCard