import React, { useState } from 'react'
import { Link as ReachLink } from 'gatsby'

// Load assets
import Logo from '../img/logo.svg'
import MapMock from '../img/mockmap.png'

// Load components
import { keyframes, Heading, Box, Text, Image, Link, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, DrawerCloseButton, useDisclosure, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import Hamburger from './UI/Hamburger/Hamburger'
import Button from '../theme/button'
import SVG from '../components/UI/SVG/index'

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
  <Box paddingBottom="20px">
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/" {...menuLink}>Home</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/about-us" {...menuLink}>About</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/industries" {...menuLink}>Industries</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/news" {...menuLink}>News</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/projects" {...menuLink}>Projects</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/team" {...menuLink}>Team</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/videos" {...menuLink}>Videos</Link>
    <Box display="flex" alignItems="center" margin={{base: "20px 0", lg: "0"}}>
      <SVG name="youtube" fill="#fff" />
      <Box margin="0 15px"><SVG name="linkedin" fill="#fff" /></Box>
      <Text color="#fff" fontSize="18px" marginRight="10px">
        ASL &copy;2020
      </Text>
    </Box>
  </Box>
  <Box>
    <Text {...menuLink} fontWeight="300" fontSize="34px">Products & Services</Text>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/wire-and-cable-preparation" {...menuLink}>Wire and Cable Preparation</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/cable-assembly" {...menuLink}>Cable Assembly</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/wiring-harness" {...menuLink}>Wiring Harness</Link>
    <Link as={ReachLink} activeStyle={{textDecoration: "underline"}} to="/control-panel" {...menuLink}>Control Panel</Link>
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
          <Text fontSize="26px" fontWeight="bold" lineHeight="31px">
            E: Enquiries@
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
        <Box display="flex" alignItems="center" >
          <Image src={MapMock} alt="Stree map" width="500px" height="70%" />
        </Box>
      </Box>
      <Box marginTop="50px">
        <Box spacing="4" display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} flexWrap={{base: "nowrap", lg: "wrap" }}>
            <FormControl id="firstName" color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">First name</FormLabel>
            <Input size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Last name</FormLabel>
            <Input size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl id="Telephone" color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Telephone number</FormLabel>
            <Input type="tel" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <FormControl id="eamil" color="#fff" width={{base: "100%", lg:"45%"}} marginBottom="6">
            <FormLabel fontSize="18px" fontWeight="bold">Email address</FormLabel>
            <Input type="email" size="lg" height="67px" display="inline-block" />
          </FormControl>
          <Textarea size="lg" color="#fff" />
          <Box display="flex" justifyContent="flex-end" width="100%" padding="10px 0">
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

    if (isOpen && type === menu) {
      return onClose()
    }

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
     <Box animation={`${flow} infinite 15s ease`} position="absolute" top="0" right="0" height="72px" background="gradient.900" backgroundSize="600% 600%"  borderBottomLeftRadius="3px" display="flex" justifyContent="space-between" alignItems="center">
        <Box padding="4" zIndex={menu === 'nav' ? "2000" : "0"}>
         <Image src={Logo} alt="asl logo" />
        </Box>
        <Box padding="4" display="flex" alignItems="center" justifyContent="center" zIndex={menu === 'nav' ? "2000" : "0"}>
          <Text {...navText} minWidth="90px" display={{base: "none", lg: "block"}} onClick={() => toggleDrawer('nav')}>{(isOpen && menu === 'nav') ? 'Close menu' : 'View menu'}</Text>
          <Hamburger isOpen={(isOpen && menu === 'nav')} toggle={() => toggleDrawer('nav')} />
        </Box>
        <Box onClick={() => toggleDrawer('contact')} bg="blue.800" padding="4" display="flex" alignItems="center" height="100%" minWidth={{base: "40%", md:"222px"}} borderBottomLeftRadius="3.2px" justifyContent="center" zIndex={menu === 'nav' ? "2000" : "0"}>
          <ChatIcon color="#fff" marginRight="5px"/>
          <Text {...navText}>get in touch</Text>
        </Box>
        <Drawer autoFocus={false} placement="right" isOpen={isOpen} onClose={onClose} closeOnEsc closeOnOverlayClick size="xl">
        <DrawerOverlay />
        <DrawerContent animation={`${flow} infinite 15s ease`} background={menu === 'nav' ? 'gradient.900' : 'gradient.800'} backgroundSize="600% 600%" >
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
