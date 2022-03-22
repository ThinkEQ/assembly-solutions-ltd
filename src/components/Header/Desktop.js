import React from 'react'
import { Link as ReachLink } from 'gatsby'

// Load components
import { Box, Text, Link, keyframes, List, ListItem, Menu, MenuItem } from '@chakra-ui/react'
import Svg from '../UI/SVG/index'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

const MainNav = ({ onClose }) => (
     <List display="flex" justifyContent="space-between" fontWeight="bold">
      <ListItem>
        <Link as={ReachLink} to="/" onClick={onClose} size="md">Home</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/about" onClick={onClose} size="md">About</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/team" onClick={onClose} size="md" >Team</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/projects" onClick={onClose} size="md" >Projects</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/industries" onClick={onClose} size="md">Markets</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/videos" onClick={onClose} size="md" >Videos</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/news" onClick={onClose} size="md">News</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/contact" onClick={onClose} size="md">Contact</Link>
      </ListItem>
  
      {/* <Box as="li" display="block">
        <Link as={ReachLink} to="/cable-assembly" onClick={onClose} size="lg" variant="nav">Cable Assembly</Link>
      </Box>
      <Box as="li" display="block" mb={6}>
        <Link as={ReachLink} to="/cable-assemblies" onClick={onClose} size="lg" variant="nav">Cable Assemblies</Link>
      </Box>
  
      <Box as="li" display="block">
        <Link as={ReachLink} to="/wiring-harness" onClick={onClose} size="lg" variant="nav">Wiring Harness</Link>
      </Box>
      <Box as="li" display="block">
        <Link as={ReachLink} to="/wiring-loom" onClick={onClose} size="lg" variant="nav">Wiring Looms</Link>
      </Box>
      <Box as="li" display="block" mb={6}>
        <Link as={ReachLink} to="/cable-looms" onClick={onClose} size="lg" variant="nav">Cable Looms</Link>
      </Box>
  
      <Box as="li" display="block">
        <Link as={ReachLink} to="/control-panels" onClick={onClose} size="lg" variant="nav">Control Panels</Link>
      </Box>
      <Box as="li" display="block">
        <Link as={ReachLink} to="/electrical-control-panels" onClick={onClose} size="lg" variant="nav">Electrical Control Panels</Link>
      </Box>
      <Box as="li" display="block">
        <Link as={ReachLink} to="/panel-wiring" onClick={onClose} size="lg" variant="nav">Panel Wiring</Link>
      </Box>
      <Box as="li" display="block" mb={6}>
        <Link as={ReachLink} to="/panel-build" onClick={onClose} size="lg" variant="nav">Panel Build</Link>
      </Box>
  
      <Box as="li" display="block">
        <Link as={ReachLink} to="/wire-preparation" onClick={onClose} size="lg" variant="nav">Wire Preparation</Link>
      </Box>
      <Box as="li" display="block">
        <Link as={ReachLink} to="/cable-preparation" onClick={onClose} size="lg" variant="nav">Cable Preparation</Link>
      </Box> */}
  </List>
  )

const DesktopNav = () => {
    return (
        <Box backgroundColor="white">
            <Box px={6} py={2} backgroundColor="gray.200">
                <Text>Award winning UK manufacturer</Text>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding={6}>
                <Link as={ReachLink} display="flex" alignItems="center" to="/">
                    <Box animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                        <Svg name="logo" width="100px" />
                    </Box>
                </Link>

                <Box>
                    <Text as="h1" textStyle="h2" fontWeight="light" color="green.900">
                        Assembly Solutions Ltd
                    </Text>
                    <MainNav />
                </Box>
    

                <Box display="flex" alignItems="center" animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                    <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" fontSize="10px" target="_blank" isExternal cursor="pointer">
                        <Svg name="youtube" fill="#fff" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
                        <Svg name="linkedin" fill="#fff" />
                    </Link>
                    <Link href="https://www.instagram.com/assemblysolutionsltd" marginRight="15px" target="_blank" isExternal cursor="pointer">
                        <Svg name="instagram" fill="#fff" />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default DesktopNav