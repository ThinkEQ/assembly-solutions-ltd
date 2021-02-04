import React from 'react'
//import { Link as ReachLink } from 'gatsby'

// Load components
import { useMediaQuery, Text, Heading, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box } from '@chakra-ui/react'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import SVG from '../../UI/SVG/index'
import { HTMLContent, MDXWrapper, toHTML } from '../../Content'

const sameWidth = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
        state.styles.popper.maxWidth = '80%'
    }
}

const sameWidthMob = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
        state.styles.popper.maxWidth = '100%'
    }
}


const TeamCard = ({ teamImg, name, jobTitle, bio, linkedIn, iconList}) => {
    const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
    const popperModifier = isLargerThan900 ? sameWidth : sameWidthMob
    return (
            <Popover modifiers={popperModifier} placement="auto-start" trigger={isLargerThan900 ? "hover" : "click"}  autoFocus={false}>
                <PopoverTrigger>
                    <Box width="100%">
                        <PreviewCompatibleImage width="100%" imageInfo={teamImg} />
                        <Text textStyle="p" fontWeight="bold">
                            {name}
                        </Text>
                        <Text textStyle="p">
                            {jobTitle}
                        </Text>
                    </Box>
                </PopoverTrigger>
                <PopoverContent maxWidth="100%" borderRadius="0">
                    <PopoverHeader display="flex" justifyContent="space-between" alignItems="center" border="none" borderColor="blue.900" backgroundColor="blue.900">
                        <Heading as="h2" fontSize="35px" lineHeight="42px" color="#fff">
                            About {name}
                        </Heading>
                        {/* <Box maxHeight="50px" maxWidth="50px">
                            <Link as={ReachLink} to={linkedIn} target="_blank" isExternal>
                                <SVG name="linkedin" />
                            </Link>
                        </Box> */}
                    </PopoverHeader>
                    <PopoverBody maxHeight="50vh" overflow="auto">
                        <Box display="flex"  justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
                            <Box width={{base: "100%", lg:"75%"}}>
                                <MDXWrapper>
                                    <HTMLContent content={toHTML(bio)} />
                                </MDXWrapper>
                            </Box>
                            <Box width={{base: "100%", lg:"25%"}} height="auto" padding={{base: "15px 0", lg:"0"}} display="flex" justifyContent="space-around" flexDirection={{base: "row", lg: "column"}} alignContent="center" alignItems="center">
                            {iconList.length > 0 &&
                                iconList.map((icon) => {
                                   return (
                                    <Box width={{base: "60px", md: "80px", lg: "40%"}} height={{base:"60px", md: "80px", lg: "40%"}}>
                                        <SVG name={icon} width="100%" height="100%" fill="#091540"/>
                                    </Box>
                                   )
                                })}
                            
                            </Box>
                        </Box>
                      
                    </PopoverBody>
                </PopoverContent>
            </Popover>
    )
}

export default TeamCard