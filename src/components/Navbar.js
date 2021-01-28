import React, { useState } from 'react'
import { Link as ReachLink } from 'gatsby'

// Load assets
import Logo from '../img/logo.svg'

// Load components
import { keyframes, Heading, Box, Text, Link, Image, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, DrawerCloseButton, useDisclosure, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import Hamburger from './UI/Hamburger/Hamburger'
import Button from '../theme/button'
import SVG from '../components/UI/SVG/index'
import Chat from '../img/svg/chat.svg'
import GMap from '../components/Map/Map'

const navText = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  lineHeight: "19px",
  cursor: "pointer"
}

const menuLink = {
  display: "block",
  fontSize: "44px",
  fontWeight: "bold",
  fontFamily: "inherit",
  color: "#fff"
}

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`


const MainNav = () => (
  <Box display="flex" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}} justifyContent="space-around" >
  <Box as="ul" paddingBottom="20px">
    <Box as="li" display="block">
      <Link as={ReachLink} to="/" size="lg" variant="nav">Home</Link>
    </Box>
    <Box as="li" display="block">
      <Link as={ReachLink} to="/about-us" size="lg" variant="nav" >About</Link>
    </Box>
    <Box as="li" display="block">
      <Link as={ReachLink} to="/industries" size="lg" variant="nav">Industries</Link>
    </Box>
    <Box as="li" display="block">
      <Link as={ReachLink} to="/news" size="lg" variant="nav">News</Link>
    </Box>
    {/* <Box as="li" display="block">
      <Link as={ReachLink} to="/projects" size="lg" variant="nav">Projects</Link>
    </Box> */}
    <Box as="li" display="block">
      <Link as={ReachLink} to="/team" size="lg" variant="nav">Team</Link>
    </Box>
    <Box as="li" display="block">
      <Link as={ReachLink} to="/videos" size="lg" variant="nav">Videos</Link>
    </Box>
    <Box display={{base: "none", lg: "flex"}} alignItems="center" margin="20px 0">
      <SVG name="youtube" fill="#fff" />
      <Box margin="0 15px"><SVG name="linkedin" fill="#fff" /></Box>
      <Text color="#fff" fontSize="18px" marginRight="10px">
        ASL &copy;2020
      </Text>
    </Box>
  </Box>
  <Box as="ul" textDecoration="none">
    <Box as="li" display="block">
      <Text {...menuLink} fontWeight="300" fontSize="34px">Products & Services</Text>
    </Box>
    <Box as="li" display="block">
      <Link as={ReachLink} to="/wire-and-cable-preparation" size="lg" variant="nav">Wire and Cable Preparation</Link>
    </Box>
    <Box as="li" display="block">
     <Link as={ReachLink} to="/cable-assembly" size="lg" variant="nav">Cable Assembly</Link>
    </Box>
    <Box as="li" display="block">
     <Link as={ReachLink} to="/wiring-harness" size="lg" variant="nav">Wiring Harness</Link>
    </Box>
    <Box as="li" display="block">
    <Link as={ReachLink} to="/control-panel" size="lg" variant="nav">Control Panel</Link>
    </Box>
  </Box>
  <Box display={{base: "flex", lg: "none"}} alignItems="center" margin={{base: "20px 0", lg: "0"}}>
    <SVG name="youtube" fill="#fff" />
    <Box margin="0 15px"><SVG name="linkedin" fill="#fff" /></Box>
    <Text color="#fff" fontSize="18px" marginRight="10px">
      ASL &copy;2020
    </Text>
  </Box>
</Box>
)

const ContactUs = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
        <Box color="#fff">
          <Heading textStyle="h1" as="h1" color="#fff">
            Contact us
          </Heading>
          <Text fontSize="26px" fontWeight="bold" lineHeight="31px" margin="15px 0">
            T: 01204 521999
          </Text>
          <Text as="a" href="mailto:enquiry@assembly-solutions.com" target="_blank" textDecoration="none" fontSize="26px" fontWeight="bold" lineHeight="31px">
            E: enquiry@assembly-solutions.com
          </Text>

          <Text  fontSize="26px" fontWeight="bold" lineHeight="31px" marginTop="35px">
            Where we are
          </Text>
          <Text textStyle="p">
            Assembly Solutions Ltd
          </Text>
          <Text textStyle="p">
           Terence House
          </Text>
          <Text textStyle="p">
            Nile Street
          </Text>
          <Text textStyle="p">
            Bolton
          </Text>
          <Text textStyle="p">
            Greater Manchester
          </Text>
          <Text textStyle="p">
            BL3 6BW UK
          </Text>
        </Box>
        <Box display="flex" maxHeight="550px" marginTop="20px" width={{base: "100%", lg:"80%"}} alignItems="center" >
          <GMap />
        </Box>
      </Box>
      <Box marginTop="50px">
        <Box spacing="4" display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} flexWrap={{base: "nowrap", lg: "wrap" }}>
            <FormControl id="firstName" act color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">First name</FormLabel>
            <Input focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Last name</FormLabel>
            <Input focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl id="Telephone" color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Telephone number</FormLabel>
            <Input focusBorderColor="green.900" type="tel" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl id="eamil" color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Email address</FormLabel>
            <Input focusBorderColor="green.900" type="email" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl id="enquiry" color="#fff">
            <FormLabel fontSize="18px" fontWeight="bold">Enquiry</FormLabel>
            <Textarea focusBorderColor="green.900" size="lg" minH="250px" color="#fff" />
          </FormControl>
          <Box display="flex" justifyContent="flex-end" width="100%" padding="10px 0" paddingBottom={{base: "40px", md: "10px"}}>
            <Button type="submit" variant="solid" width="300px">Submit</Button>
          </Box>
        </Box>
      </Box>
  </Box>
  )
}

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const {isOpen, onClose, onOpen } = useDisclosure()
  
  function toggleDrawer(type) {

    // Close the drawer
    if (isOpen && type === menu) {
      return onClose()
    }

    // Delay to allow transatiion to change drawer content
    if(isOpen && type !== menu) {
     onClose()

     return setTimeout(() => {
      setMenu(type)
      onOpen()
     }, 500)
    }

    // Open the drawer
    setMenu(type)
    onOpen()
    return
  }

  let menuDisplay = null

  switch(menu) {
    case 'nav':
      menuDisplay = <MainNav />
      break
    case 'contact':
      menuDisplay = <ContactUs />
      break
    default:
      menuDisplay = null
  }
  return (
     <Box animation={`${flow} infinite 15s ease`} position={{base: "fixed", md: "absolute"}} top="0" right="0" height="72px" background="gradient.900" backgroundSize="600% 600%"  borderBottomLeftRadius="3px" display="flex" justifyContent="space-between" alignItems="center">
        <Box padding="4" zIndex={menu === 'nav' ? "2000" : "0"}>
        <Link as={ReachLink} to="/">
          <Image src={Logo} alt="asl logo" />
        </Link>
        </Box>
        <Box padding="4" display="flex" alignItems="center" justifyContent="center" zIndex={menu === 'nav' ? "2000" : "0"}>
          <Text {...navText} minWidth="90px" display={{base: "none", lg: "block"}} onClick={() => toggleDrawer('nav')}>{(isOpen && menu === 'nav') ? 'Close menu' : 'View menu'}</Text>
          <Hamburger isOpen={(isOpen && menu === 'nav')} toggle={() => toggleDrawer('nav')} />
        </Box>
        <Box onClick={() => toggleDrawer('contact')} bg="blue.800" padding="4" display="flex" alignItems="center" height="100%" minWidth={{base: "40%", md:"222px"}} borderBottomLeftRadius="3.2px" justifyContent="center" zIndex={menu === 'nav' ? "2000" : "0"}>
          <Image src={Chat} color="#fff" marginRight="5px"/>
          <Text {...navText}>get in touch</Text>
        </Box>
        <Drawer autoFocus={false} placement="right" isOpen={isOpen} onClose={onClose} closeOnEsc closeOnOverlayClick size="xl">
        <DrawerOverlay />
        <DrawerContent animation={`${flow} infinite 15s ease`} background={menu === 'nav' ? 'gradient.900' : 'gradient.800'} zIndex="2000" backgroundSize="600% 600%" >
          <DrawerHeader minHeight="100px">
          {menu === 'contact' && <DrawerCloseButton color="#fff" />}
          </DrawerHeader>
            <DrawerBody>
             {menuDisplay}
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
