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
  fontWeight: "bold"
}


const Footer = () => {
  return(
    <Box background="blue.900" color="#fff" padding={12}>
      <Heading fontFamily="30px" lineHeight="36px" fontWeight="bold" marginBottom="20px">
        Stay Connected
      </Heading>

      <Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
        <Box width="48%">
          <InputGroup size="lg">
            <Input borderRadius="3px" color="blue.900" placeholder="name@email.com" borderColor="blue.900" border="none" height="72px" background="#fff" />
            <InputRightElement width="175px" children={<Button variant="solid" height="72px" whiteSpace="nowrap">Subscribe</Button>} height="72px" background="green.900" fontWeight="bold" borderTopRightRadius="3px" borderBottomRightRadius="3px" />
          </InputGroup>
          <Box display="flex" alignItems="flex-start" justifyContent="space-between" width="80%" marginTop="20px">
            <Text {...para} >
              ASL <br/> Newsletter
            </Text>
            <Text {...para}>
              Subscribe to our newsletter <br/> for all the ASL news.
            </Text>
          </Box>
        </Box>

        <Box width="48%" display="flex" justifyContent="space-between" paddingTop="10px">
          <List spacing="4">
            <ListItem {...para}>
              <Link as={ReachLink} to="/wire">
                Wire Preperation
              </Link>
            </ListItem>
            <ListItem {...para}>
              <Link as={ReachLink} to="/cable">
                Cable Assembly
              </Link>
            </ListItem>
            <ListItem {...para}>
              <Link as={ReachLink} to="/control">
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
              <Link as={ReachLink} to="/wire">
                Videos
              </Link>
            </ListItem>
            <ListItem {...para}>
              <Link as={ReachLink} to="/wire">
                Contact Us
              </Link>
            </ListItem>
          </List>
          <List spacing="4">
            <ListItem {...para} fontWeight="300">
              <Link as={ReachLink} to="/terms">
                Terms of Use
              </Link>
            </ListItem>
            <ListItem {...para} fontWeight="300">
              <Link as={ReachLink} to="/privacy">
                Privacy Policy
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" marginTop="30px">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between" width="125px">
          <SVG name="youtube" />
          <SVG name="linkedin" />
        </Box>
        
        <Box>
          <Text fontSize="14px" lineHeight="17px">
            Assembly Solutions Ltd is registered in England  under registration number 3131352.
          </Text>
          <Text {...para} textAlign="right">
            ASL &copy;2020
          </Text>
        </Box>
      </Box>
    </Box>
  ) 
}

export default Footer
