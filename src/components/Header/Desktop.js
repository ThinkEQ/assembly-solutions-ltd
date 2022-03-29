import React, { useState } from 'react'
import { Link as ReachLink, navigate } from 'gatsby'

// Load components
import { Box, Text, Link, keyframes, List, ListItem, Menu, MenuItem, MenuButton, MenuList, Button, useDisclosure, MenuGroup } from '@chakra-ui/react'
import Svg from '../UI/SVG/index'
import MarketsList from '../StaticQueries/MarketsListNav'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

const style = {
    color: 'gray.600',
    _hover: {
        textDecoration: 'none',
        color: 'blackAlpha.900'
    }
}

const productList = [
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/wire-preparation" size="md" {...style} color="blackAlpha.900" >Wire Preparation</Link>,   
            <Link as={ReachLink} to="/cable-preparation" size="md" {...style}>Cable Preparation</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/cable-assembly" size="md" {...style} color="blackAlpha.900" >Cable Assembly</Link>,
            <Link as={ReachLink} to="/cable-assemblies" size="md" {...style}>Cable Assemblies</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/wiring-harness" size="md" {...style} color="blackAlpha.900" >Wiring Harness</Link>,
            <Link as={ReachLink} to="/wiring-loom" size="md" {...style}>Wiring Looms</Link>,
            <Link as={ReachLink} to="/cable-looms" size="md" {...style}>Cable Looms</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/control-panels" size="md" {...style} color="blackAlpha.900" >Control Panels</Link>,
            <Link as={ReachLink} to="/electrical-control-panels" size="md" {...style}>Electrical Control Panels</Link>,
            <Link as={ReachLink} to="/panel-wiring" size="md" {...style}>Panel Wiring</Link>,
            <Link as={ReachLink} to="/panel-build" size="md" {...style}>Panel Build</Link>
        ]}        
]


const MenuMain = ({ isOpen, onOpen, list = []}) => {
    const [menuType, setMenuType] = useState(null)
    
    function onOpenMenu(menu) {
        if(menuType !== menu) {
            setMenuType(menu)
        }

        if (!isOpen) {
            onOpen()
        }
    }
   
    return (
        <Menu placement="bottom" offset={[0, 1]} isOpen={isOpen}>
            <MenuButton onMouseEnter={() => onOpenMenu('products')} variant="navAlt" as={Link}>
                Products
            </MenuButton>
            <MenuButton mx={6} onMouseEnter={() => onOpenMenu('markets')} variant="navAlt" as={Link}>
                Markets
            </MenuButton>
            <MenuList width="100vw" transform="translateX(-381px)" py={6} borderTop="none" borderRadius="none" justifyContent="center" display="flex">
                {menuType === 'products' &&
                    <MenuGroup _hover={{ backgroundColor: "none"}}>
                        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridColumnGap={4}>
                        {list.map((item) => {

                        return (
                            <MenuItem display="flex" justifyContent="flex-start" _hover={{ background: "none"}} alignItems="flex-start" flexDir="column">
                                {item.group.map((li) => li)}
                            </MenuItem>
                        )
                    })}
                        </Box>
                    </MenuGroup>
                }
               {menuType === 'markets' &&<MenuGroup>
                    <MarketsList />
               </MenuGroup>}
            </MenuList>
        </Menu>
    )
}

const MainNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <List display="flex" justifyContent="space-between" onMouseLeave={onClose} >
      <ListItem mr={6}>
        <Link as={ReachLink} to="/" onClick={onClose} size="md" variant="navAlt">Home</Link>
      </ListItem>
      <ListItem mr={6}>
        <Link as={ReachLink} to="/about" onClick={onClose} size="md" variant="navAlt">About</Link>
      </ListItem>
      <ListItem mr={6}>
        <Link as={ReachLink} to="/team" onClick={onClose} size="md" variant="navAlt">Team</Link>
      </ListItem>
        <MenuMain isOpen={isOpen} onOpen={onOpen} onClose={onClose} title="Products"  list={productList} />
      <ListItem mr={6}>
        <Link as={ReachLink} to="/videos" onClick={onClose} size="md" variant="navAlt" >Videos</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/news" onClick={onClose} size="md" variant="navAlt">News</Link>
      </ListItem>
  </List>
  )
}

const DesktopNav = () => {
    return (
        <Box backgroundColor="white" borderBottom="1px solid" borderColor="gray.200">
            <Box px={6} py={2} backgroundColor="gray.200">
                <Text textAlign="center" textTransform="uppercase">Excellent 98% customer satisfaction</Text>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding={6}>
                <Box width="25%">
                    <Link as={ReachLink} display="inline-block" to="/">
                        <Box animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                            <Svg name="logo" width="100px" />
                        </Box>
                    </Link>
                </Box>
                <Box textAlign="center">
                    <Text as="h1" textStyle="h2" textTransform="uppercase" fontWeight="light" color="blue.900">
                        Assembly Solutions
                    </Text>
                    <MainNav />
                </Box>
                <Box width="25%" display="flex" justifyContent="flex-end">     
                    <Button display="flex" alignItems="center" variant="default" bg="blue.800" onClick={() => navigate("/contact")}>
                        <Svg name="chat" color="#fff" />
                        <Text marginLeft="5px">Contact</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default DesktopNav