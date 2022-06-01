import React, { useState, useRef } from 'react'
import { Link as ReachLink, navigate } from 'gatsby'

// Load components
import { Box, Text, Link, keyframes, List, ListItem, Menu, MenuButton, MenuList, Button, useDisclosure, MenuGroup, Image } from '@chakra-ui/react'
import Svg from '../UI/SVG/index'
import MarketsList from '../StaticQueries/MarketsListNav'
import Logo from '../../img/logoAlt.png'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

const style = {
    color: 'gray.600',
    fontSize: 'md',
    _hover: {
        textDecoration: 'none',
        color: 'blackAlpha.900'
    }
}

const productList = [
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/wire-preparation" size="md" {...style} >Wire Preparation</Link>,   
            <Link as={ReachLink} to="/cable-preparation" size="md" {...style}>Cable Preparation</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/cable-assembly" size="md" {...style} >Cable Assembly</Link>,
            <Link as={ReachLink} to="/cable-assemblies" size="md" {...style}>Cable Assemblies</Link>,
            <Link as={ReachLink} to="/battery-and-hv-cables" size="md" {...style}>Battery &amp; HV Cables</Link>,
            <Link as={ReachLink} to="/earth-strap" size="md" {...style}>Earth Straps</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/wiring-harness" size="md" {...style} >Wiring Harness</Link>,
            <Link as={ReachLink} to="/wiring-loom" size="md" {...style}>Wiring Looms</Link>,
            <Link as={ReachLink} to="/cable-looms" size="md" {...style}>Cable Looms</Link>,
            <Link as={ReachLink} to="/electric-vehicle-and-hybrid-vehicle-wiring-harnesses" size="md" {...style}>EV &amp; HV Harnesses</Link>,
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/control-panels" size="md" {...style} >Control Panels</Link>,
            <Link as={ReachLink} to="/electrical-control-panels" size="md" {...style}>Electrical Panels</Link>,
            <Link as={ReachLink} to="/panel-wiring" size="md" {...style}>Panel Wiring</Link>,
            <Link as={ReachLink} to="/panel-build" size="md" {...style}>Panel Build</Link>
        ]},
        { group: [
            <Link as={ReachLink} fontWeight="bold" to="/gem-terminals" size="md" {...style} >Distribution</Link>,
            <Link as={ReachLink} to="/gem-terminals" size="md" {...style}>GEM Terminals</Link>
        ]},      
]


const MenuMain = ({ isOpen, onOpen, onClose, list = []}) => {
    const [menuType, setMenuType] = useState(null)
    const ref = useRef()
    
    function onOpenMenu(menu) {

        if (!ref.current) {
            ref.current = true
        }

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
            <Link mx={6} as={ReachLink} to="/services" size="md" variant="navAlt" onMouseEnter={onClose}>
                Services
            </Link>
            <MenuButton mr={6} onMouseEnter={() => onOpenMenu('markets')} variant="navAlt" as={Link}>
                Markets
            </MenuButton>
            <MenuList width={ref.current ? "100vw" : "100%"} transform="translateX(-381px)"  pt={10} pb={6} borderTop="none" borderRadius="none" justifyContent="center" display="flex">
                {menuType === 'products' &&
                    <MenuGroup _hover={{ backgroundColor: "none"}}>
                        <Box display="grid" gridTemplateColumns="repeat(5, max-content)" gridColumnGap={6}>
                        {list.map((item) => {

                        return (
                            <Box display="flex" justifyContent="flex-start" _hover={{ background: "none"}} alignItems="flex-start" flexDir="column">
                                {item.group.map((li) => li)}
                            </Box>
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
    <List display="flex" justifyContent="space-between" onMouseLeave={onClose}>
      <ListItem mr={6}>
        <Link as={ReachLink} to="/" onClick={onClose} size="md" variant="navAlt" onMouseEnter={onClose}>Home</Link>
      </ListItem>
      <ListItem mr={6}>
        <Link as={ReachLink} to="/about" onClick={onClose} size="md" variant="navAlt" onMouseEnter={onClose}>About</Link>
      </ListItem>
      <ListItem mr={6}>
        <Link as={ReachLink} to="/team" onClick={onClose} size="md" variant="navAlt" onMouseEnter={onClose}>Team</Link>
      </ListItem>
        <MenuMain isOpen={isOpen} onOpen={onOpen} onClose={onClose} title="Products" list={productList} />
      <ListItem mr={6}>
        <Link as={ReachLink} to="/videos" onClick={onClose} size="md" variant="navAlt" onMouseEnter={onClose} >Videos</Link>
      </ListItem>
      <ListItem>
        <Link as={ReachLink} to="/news" onClick={onClose} size="md" variant="navAlt" onMouseEnter={onClose}>News</Link>
      </ListItem>
  </List>
  )
}

const DesktopNav = () => {
    //const [shrunk, setShrunk] = useState(false)
    
    // useEffect(() => {

    //     const handler = () => {
    //         setShrunk((isShrunk) => {
                
    //             if (!isShrunk && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //                 return true
    //             }

    //             if (isShrunk && document.body.scrollTop < 4 || document.documentElement.scrollTop < 4) {
    //                 return false
    //             }

    //             return isShrunk
    //         })
    //     }
        
    //     if (typeof window !== 'undefined') {

    //         window.addEventListener('scroll', handler)
    //         return () => window.removeEventListener('scroll', handler)
    //     }
    // }, [])
   
    return (
        <Box backgroundColor="white" borderBottom="1px solid" borderColor="gray.200">
            {/* <Box display="flex" alignItems="center" justifyContent="center" height={shrunk ? '0' : '50px'} backgroundColor="neutral.700" overflow="hidden" transition='all .3s'>
                <Text textAlign="center" textTransform="uppercase">Excellent 98% customer satisfaction</Text>
            </Box> */}
            <Box display="flex" alignItems="center" justifyContent="space-between" px={6} py={4}>
                <Box width="25%" pt={5}>
                    <Link as={ReachLink} display="inline-block" to="/">
                        {/* <Box animation={`${flow} infinite 10s ease`} background="gradient.900" backgroundSize="600% 600%" px={6} py={2} borderRadius="sm">
                            <Svg name="logo" width="100px" />
                           
                        </Box> */}
                        <Image src={Logo} maxW="160px" />
                    </Link>
                </Box>
                <Box textAlign="center">
                    <Text as="h1" textStyle="h2" textTransform="uppercase" fontWeight="bold" color="blue.900" mb={3}>
                        Assembly Solutions
                    </Text>
                    <MainNav />
                </Box>
                <Box width="25%" display="flex" justifyContent="flex-end">     
                    <Button display="flex" alignItems="center" variant="default" bg="blue.800" onClick={() => navigate("/contact")}>
                        <Svg name="chat" color="#fff" />
                        <Text marginLeft="5px">Contact Us</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default DesktopNav