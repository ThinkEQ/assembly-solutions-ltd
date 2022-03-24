import React from 'react'

// Load components
import { Box } from '@chakra-ui/react'
import MobileHeader from './Header/Mobile'
import DesktopNav from './Header/Desktop'


const Navbar = (props) => { 
  return (
     <Box>
      <Box display={{ base: "block", lg: "none"}}>
          <MobileHeader {...props} />
      </Box>
      <Box display={{ base: "none", lg: "block"}}>
        <DesktopNav />
      </Box>
     </Box>
  )
}

export default Navbar
