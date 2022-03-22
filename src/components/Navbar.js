import React from 'react'
import { Link as ReachLink } from 'gatsby'
import { Field } from 'formik'

// Load components
import { keyframes, Heading, Button, Box, Text, Link, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, DrawerCloseButton, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Stack } from '@chakra-ui/react'
import Hamburger from './UI/Hamburger/Hamburger'
import Svg from '../components/UI/SVG/index'
import GMap from '../components/Map/Map'
import FormProvider from './Form/Form'
import MobileHeader from './Header/Mobile'
import DesktopNav from './Header/Desktop'



const Navbar = (props) => {
 
  return (
     <Box>
        <Box display={{ base: "block", lg: "none"}}>
          <MobileHeader {...props} />
      </Box>
      <DesktopNav />
     </Box>
  )
}

export default Navbar
