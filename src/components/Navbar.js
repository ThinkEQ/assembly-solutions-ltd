import React, { useState } from 'react'

// Load assets
import Logo from '../img/logo.svg'

// Load components
import { Box, Text, Image } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import Hamburger from './UI/Hamburger/Hamburger'

const navText = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  lineHeight: "19px",
  cursor: "pointer"
}

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
     <Box position="absolute" top="0" right="0" height="85px" background="gradient.900" borderBottomLeftRadius="3px" display="flex" justifyContent="space-between" alignItems="center">
        <Box padding="4">
         <Image src={Logo} alt="asl logo" />
        </Box>
        <Box padding="4" minWidth="163px" display="flex" alignItems="center" justifyContent="center">
          <Text {...navText} onClick={() => setMenu(!menu)}>{menu ? 'Close menu' : 'View menu'}</Text>
          <Hamburger isOpen={menu} toggle={() => setMenu(!menu)} />
        </Box>
        <Box bg="blue.800" padding="4" display="flex" alignItems="center" height="100%" minWidth="222px" justifyContent="center">
          <ChatIcon color="#fff" marginRight="5px"/>
          <Text {...navText}>get in touch</Text>
        </Box>
    </Box>
  )
}

export default Navbar
