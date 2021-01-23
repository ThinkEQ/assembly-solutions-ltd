import React from 'react'
import { Link as ReachLink } from 'gatsby'

// Load components
import { Box, Heading, Input, InputGroup, InputRightElement, Text, ListItem, List, Link } from '@chakra-ui/react'
import Button from '../theme/button'
import SVG from './UI/SVG/index'

const para = {
  fontSize: "18px",
  lineHeight: "20px",
  fontFamily: "inherit",
  fontWeight: "400"
}


const Footer = () => {
  return(
    <Box background="blue.900" color="#fff" textStyle="section">
      <Box textStyle="container">
        <Heading fontFamily="30px" lineHeight="36px" fontWeight="400" marginBottom="20px">
          Stay Connected
        </Heading>

        <Box display="flex" flexDirection={{base: "column", lg:"row"}} alignItems="flex-start" justifyContent="space-between">
          <Box width={{base: "100%", lg:"48%"}} marginBottom={{base: "30px", lg: "0"}}>
            <InputGroup size="lg">
              <Input borderRadius="3px" color="blue.900" placeholder="name@email.com" borderColor="blue.900" border="none" height={{base: "51px", md:"72px"}} background="#fff" />
              <InputRightElement width={{base: "110px", md:"175px"}} padding="0" children={<Button variant="solid" size="full" paddingRight={{base: "0", md: "2.5rem"}} paddingLeft={{base: "0", md: "2.5rem"}} whiteSpace="nowrap">Subscribe</Button>} height={{base: "51px", md:"72px"}} background="green.900" fontWeight="bold" borderTopRightRadius="3px" borderBottomRightRadius="3px" />
            </InputGroup>
            <Box display="flex" alignItems="flex-start" justifyContent="space-between" width={{base: "100%", lg:"80%"}} marginTop="20px">
              <Text {...para} fontSize={{base: "14px", lg: "18px"}} >
                ASL <br/> Newsletter
              </Text>
              <Text {...para} fontSize={{base: "14px", lg: "18px"}}>
                Subscribe to our newsletter <br/> for all the ASL news.
              </Text>
            </Box>
          </Box>

          <Box width={{base: "100%", lg:"48%"}} display="flex" justifyContent="space-between" paddingTop="10px">
            <List spacing="4">
              <ListItem {...para}>
                <Link as={ReachLink} to="/wire-and-cable-preparation">
                  Wire Preperation
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/cable-assembly">
                  Cable Assembly
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/control-panel">
                  Control Panel
                </Link>
              </ListItem>
            </List>

            <List spacing="4">
              <ListItem {...para}>
              <Link as={ReachLink} to="/about-us">
              About
              </Link>
            </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/industries">
                  Industries
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/news">
                News
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/projects">
                  Projects
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/videos">
                  Videos
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/contact-us">
                  Contact Us
                </Link>
              </ListItem>
            </List>
            <List spacing="4" display={{base: "none", lg: "block"}}>
              <ListItem {...para} fontWeight="300">
                <Link as={ReachLink} to="/terms-and-conditions">
                  Terms of Use
                </Link>
              </ListItem>
              <ListItem {...para} fontWeight="300">
                <Link as={ReachLink} to="/privacy-policy">
                  Privacy Policy
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box display="flex" flexDirection={{base: "column", lg: "row"}} alignItems={{base: "flex-start", lg:"center"}} justifyContent="space-between" marginTop="30px">
          <Box display="flex" alignItems="flex-start" justifyContent="space-between" width="125px" marginBottom={{base: "30px", lg: "0"}}>
            <SVG name="youtube" />
            <SVG name="linkedin" />
          </Box>

        <List justifyContent="space-around" alignItems="flex-start" width="100%" marginBottom="20px" display={{base: "flex", lg: "none"}}>
          <ListItem {...para} fontWeight="300">
            <Link as={ReachLink} to="/terms-and-conditions">
              Terms of Use
            </Link>
          </ListItem>
          <ListItem {...para} fontWeight="300">
            <Link as={ReachLink} to="/privacy-policy">
              Privacy Policy
            </Link>
          </ListItem>
        </List>
          
          <Box>
            <Text fontSize="14px" lineHeight="17px" marginBottom={{base: "20px", lg: "0"}}>
              Assembly Solutions Ltd is registered in England  under registration number 3131352.
            </Text>
            <Text {...para} textAlign={{base: "left", lg:"right"}}>
              ASL &copy;2020
            </Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  ) 
}

export default Footer
