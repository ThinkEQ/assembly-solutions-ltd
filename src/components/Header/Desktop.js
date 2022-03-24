import React from 'react'
import { Link as ReachLink } from 'gatsby'

// Load components
import { Box, Text, Link, keyframes, List, ListItem, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import Svg from '../UI/SVG/index'
import MarketsList from '../StaticQueries/MarketsListNav'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`
const productList = [
        <Link as={ReachLink} fontWeight="bold" to="/wire-preparation" size="md">Wire Preparation</Link>,   
        <Link as={ReachLink} to="/cable-preparation" size="md">Cable Preparation</Link>,
         'spacer',
        <Link as={ReachLink} fontWeight="bold" to="/cable-assembly" size="md">Cable Assembly</Link>,
        <Link as={ReachLink} to="/cable-assemblies" size="md">Cable Assemblies</Link>,
        'spacer',
        <Link as={ReachLink} fontWeight="bold" to="/wiring-harness" size="md">Wiring Harness</Link>,
        <Link as={ReachLink} to="/wiring-loom" size="md">Wiring Looms</Link>,
        <Link as={ReachLink} to="/cable-looms" size="md">Cable Looms</Link>,
        'spacer',
        <Link as={ReachLink} fontWeight="bold" to="/control-panels" size="md">Control Panels</Link>,
        <Link as={ReachLink} to="/electrical-control-panels" size="md">Electrical Control Panels</Link>,
        <Link as={ReachLink} to="/panel-wiring" size="md">Panel Wiring</Link>,
        <Link as={ReachLink} to="/panel-build" size="md">Panel Build</Link>
]


const MenuMain = ({ title, list = []}) => {
    return (
        <Menu>
            <MenuButton as={Link}>
                {title}
            </MenuButton>
            <MenuList>
                {list.map((item) => {

                    if (item === 'spacer') {
                        return (
                            <Box mb={6} />
                        )
                    }
                    return (
                        <MenuItem>
                            {item}
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

const MainNav = ({ onClose }) => (
     <List display="flex" justifyContent="space-between">
      <ListItem mr={2}>
        <Link as={ReachLink} to="/" onClick={onClose} size="md">Home</Link>
      </ListItem>
      <ListItem mr={2}>
        <Link as={ReachLink} to="/about" onClick={onClose} size="md">About</Link>
      </ListItem>
      <ListItem mr={2}>
        <Link as={ReachLink} to="/team" onClick={onClose} size="md" >Team</Link>
      </ListItem>
        <MenuMain title="Products" list={productList} />
      <ListItem mx={2}>
        <MarketsList />
      </ListItem>
      <ListItem mr={2}>
        <Link as={ReachLink} to="/videos" onClick={onClose} size="md" >Videos</Link>
      </ListItem>
      <ListItem mr={2}>
        <Link as={ReachLink} to="/news" onClick={onClose} size="md">News</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/contact" onClick={onClose} size="md">Contact</Link>
      </ListItem>
  </List>
  )

const DesktopNav = () => {
    return (
        <Box backgroundColor="white">
            <Box px={6} py={2} backgroundColor="gray.200">
                <Text>Award winning UK manufacturer</Text>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding={6}>
                <Box width="25%">
                    <Link as={ReachLink} display="flex" alignItems="center" to="/">
                        <Box animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                            <Svg name="logo" width="100px" />
                        </Box>
                    </Link>
                </Box>
             

                <Box textAlign="center">
                    <Text as="h1" textStyle="h2" fontWeight="light" color="blue.900">
                        Assembly Solutions Ltd
                    </Text>
                    <MainNav />
                </Box>
    
                <Box width="25%" display="flex" justifyContent="flex-end">        
                    <Box display="flex" alignItems="center" animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                        <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" fontSize="10px" target="_blank" isExternal cursor="pointer">
                            <Svg name="youtube" width="40px" fill="#fff" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
                            <Svg name="linkedin" width="40px" fill="#fff" />
                        </Link>
                        <Link href="https://www.instagram.com/assemblysolutionsltd" target="_blank" isExternal cursor="pointer">
                            <Svg name="instagram" width="40px" fill="#fff" />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DesktopNav