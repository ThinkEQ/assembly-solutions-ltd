import React from 'react'

// Load components
import { useMediaQuery, Text, Heading, Box, Link } from '@chakra-ui/react'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import Svg from '../../UI/SVG/index'
import { HTMLContent, MDXWrapper, toHTML } from '../../Content'

const TeamHeader = ({name}) => {
    return (
        <Box display="flex" padding="20px 30px" justifyContent="space-between" alignItems="center" border="none" borderColor="blue.900" backgroundColor="blue.900">
            <Heading as="h2" fontSize={{base: "20px", md:"35px"}} lineHeight="42px" color="#fff">
                About {name}
            </Heading>
        </Box>
    )
}

const TeamBody = ({ iconList, bio, linkedIn }) => {
    return (
        <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
            <Box width={{base: "100%", lg:"75%"}} padding="20px 30px">
                <MDXWrapper>
                    <HTMLContent content={toHTML(bio)} />
                </MDXWrapper>
                {linkedIn && <Link href={linkedIn} isExternal>
                    <Svg name="linkedin" />
                </Link>}
            </Box>
            <Box width={{base: "100%", lg:"25%"}} minHeight="150px" background="neutral.900" height="auto"  display="flex" padding={{base: "20px", lg:"15px 0"}} flexDirection={{base: "row", lg: "column"}} alignContent="center" alignItems="center">
            <Text textStyle="p" flexGrow={{base: "1", lg: "initial"}}  fontWeight="bold">Interests</Text>
            {iconList.length > 0 &&
                iconList.map((icon) => {
                    return (
                    <Box width={{base: "80px", md: "80px", lg: "100px"}} margin={{base: "10px 15px", lg:"10px 0"}}  height={{base:"80px", md: "80px", lg: "100px"}}>
                        <Svg name={icon} width="100%" height="100%" fill="#091540"/>
                    </Box>
                    )
                })}
            
            </Box>
        </Box>
    )
}

const TeamCard = ({ teamImg, name, jobTitle, click, bio, iconList, linkedIn }) => {
    const [isLargerThan480] = useMediaQuery("(min-width: 900px)")
    return (
        <Box width="100%" cursor="pointer" onClick={() => click({ name, bio, interests: iconList, linkedIn }) }>
            <PreviewCompatibleImage width="100%" height={isLargerThan480 ? "262px" : "293px"} maxHeight="293px" maxWidth={isLargerThan480 ? "292px" : "100%"} imageInfo={teamImg} />
            <Text textStyle="p" fontWeight="bold" lineHeight="28px !important" marginTop="10px" marginBottom="0">
                {name}
            </Text>
            <Text textStyle="p" lineHeight="28px !important" marginBottom="0">
                {jobTitle}
            </Text>
        </Box>
    )
}

export {TeamHeader, TeamBody}

export default TeamCard