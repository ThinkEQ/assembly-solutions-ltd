import React, { useEffect, useState } from 'react'
import { Link as ReachLink } from 'gatsby'
import { Field } from 'formik'


// Load assets
import Logo from '../img/svg/logo.svg'

// Load components
import { keyframes, Heading, Button, Box, Text, Link, Image, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, DrawerCloseButton, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'
import Hamburger from './UI/Hamburger/Hamburger'
//import Button from '../theme/button'
import SVG from '../components/UI/SVG/index'
import Chat from '../img/svg/chat.svg'
import GMap from '../components/Map/Map'
import FormProvider from './Form/Form'

const navText = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  lineHeight: "19px",
  cursor: "pointer"
}

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

const ContactForm = ({ isSubmitting }) => {
  return (
    <Box spacing="4" display="flex" justifyContent="space-between" flexDirection={{base: "column", lg: "row"}} flexWrap={{base: "nowrap", lg: "wrap" }}>
    <Field name="firstName">
      {({ field, form }) => (
        <FormControl id="firstName" color="#fff" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.firstName && form.touched.firstName} marginBottom="6">
          <FormLabel fontSize="18px" htmlFor="firstName" fontWeight="bold">First name</FormLabel>
          <Input {...field} id="firstName" name="firstName" type="text" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
        </FormControl>
      )}
      </Field>
      <Field name="lastName">
      {({ field, form }) => (
        <FormControl color="#fff" id="lastName" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.lastName && form.touched.lastName} marginBottom="6">
          <FormLabel htmlFor="lastName" fontSize="18px" fontWeight="bold">Last name</FormLabel>
          <Input {...field} id="lastName" name="lastName" type="text" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="telephone">
      {({ field, form }) => (
        <FormControl id="telephone" color="#fff" width={{base: "100%", lg:"48%"}} marginBottom="6" isInvalid={form.errors.telephone && form.touched.telephone}>
          <FormLabel htmlFor="telephone" fontSize="18px" fontWeight="bold">Telephone number</FormLabel>
          <Input {...field} id="telephone" name="telephone" type="tel" focusBorderColor="green.900" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.telephone}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="email">
      {({ field, form }) => (
        <FormControl id="eamil" color="#fff" width={{base: "100%", lg:"48%"}} isInvalid={form.errors.email && form.touched.email} marginBottom="6">
          <FormLabel htmlFor="email" fontSize="18px" fontWeight="bold">Email address</FormLabel>
          <Input {...field} id="email" name="email" focusBorderColor="green.900" type="email" size="lg" height="67px" display="inline-block" />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="enquiry" >
      {({ field, form }) => (
        <FormControl id="enquiry" color="#fff" isInvalid={form.errors.enquiry && form.touched.enquiry}>
          <FormLabel fontSize="18px" htmlFor="enquiry" fontWeight="bold">Enquiry</FormLabel>
          <Textarea {...field} name="enquiry" focusBorderColor="green.900" size="lg" minH="250px" color="#fff" />
          <FormErrorMessage>{form.errors.enquiry}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Box display="flex" justifyContent="flex-end" width="100%" padding="10px 0" paddingBottom={{base: "100px", md: "10px"}}>
      <Button type="submit" variant="solid" isLoading={isSubmitting} loadingText="Submitting"  width={{base: "100%", lg: "300px"}}>Submit</Button>
    </Box>
  </Box>
  )
}


const MainNav = () => (
  <Box display="flex" alignItems="flex-start" flexDirection={{base: "column", lg: "row"}} justifyContent="space-around" >
  <Box as="ul" paddingBottom="20px" position="relative" _after={{ 
    display: {base: "none", lg: "block"},
    position: "absolute",
    content: "''",
    top:  "20px",
    right: 0,
    opacity: "0.3",
    height: "70%",
    width: "1px",
    background: "#fff"
  }}>
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
    <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" target="_blank" isExternal cursor="pointer">
      <SVG name="youtube" fill="#fff" />
    </Link>
    <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
      <SVG name="linkedin" fill="#fff" />
    </Link>
      <Text color="#fff" fontSize="18px" marginRight="10px">
        ASL &copy;2021
      </Text>
    </Box>
  </Box>
  <Box as="ul" textDecoration="none">
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
    <Link as={ReachLink} to="/control-panels" size="lg" variant="nav">Control Panels</Link>
    </Box>
  </Box>
  <Box display={{base: "flex", lg: "none"}} alignItems="center" margin={{base: "20px 0", lg: "0"}}>
    <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" target="_blank" isExternal cursor="pointer">
      <SVG name="youtube" fill="#fff" />
    </Link>
    <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
      <SVG name="linkedin" fill="#fff" />
    </Link>
    <Text color="#fff" fontSize="18px" marginRight="10px">
      ASL &copy;2021
    </Text>
  </Box>
</Box>
)

const ContactUs = () => {
  
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" paddingLeft={{base: "0", lg: "20px"}} flexDirection={{base: "column", lg: "row"}}>
        <Box color="#fff">
          <Heading textStyle="h2" as="h2" color="#fff">
            Contact us
          </Heading>
          <Text fontSize="26px" fontWeight="bold" lineHeight="31px" margin="15px 0">
            T: 01204 521999
          </Text>
          <Link as="a" variant="nav" href="mailto:enquiry@assembly-solutions.com" target="_blank"  fontSize="26px" fontWeight="bold" lineHeight="31px">
            E: Enquiry@assembly-solutions.com
          </Link>
          <Text  fontSize="26px" fontWeight="bold" lineHeight="31px" marginTop="50px" marginBottom="15px">
            Where we are
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
            Assembly Solutions Ltd
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
           Terence House
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
            Nile Street
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
            Bolton
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
            Greater Manchester
          </Text>
          <Text textStyle="p" fontSize="16px" lineHeight="28px">
            BL3 6BW UK
          </Text>
        </Box>
        <Box display="flex" maxHeight="550px" height={{base: "auto", lg:"500px"}}  marginTop="20px" width={{base: "100%", lg:"60%"}} alignItems="center" >
          <GMap />
        </Box>
      </Box> 
      <Box marginTop="30px" paddingLeft={{base: "0", lg:"20px"}}>
        <FormProvider url="/contact/thanks" formName="contact" initialValues={{firstName: "", lastName: "", telephone: "", email: "", enquiry: ""}} setRules={['firstName', 'lastName', 'enquiry', 'telephone']}>
          <ContactForm  />
        </FormProvider>
      </Box>
  </Box>
  )
}

const Navbar = ({ menu, toggleDrawer, isOpen, onClose }) => {
  const [prevScrollPos,  setScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  let menuDisplay = null
  const position = visible ? "0" : "-80px"
 
  // Add smooth slide on scroll
  const slideNav = {transform: `translateY(${position})`, transition: ".4s all ease-in-out"}
  
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
      // Find scroll pos
      const currentScrollPos = window.pageYOffset
     
      const navDisplay = currentScrollPos < 100 ? true : prevScrollPos > currentScrollPos

      // Set our display bool
      setVisible(navDisplay)

      // Set the current pos
      setScrollPos(currentScrollPos)

  }

  function openDrawer() {
    toggleDrawer('nav')
    setVisible(isOpen)
  }

  return (
     <Box animation={`${flow} infinite 15s ease`} position="fixed" width={{base:"100%", md: "auto", lg: "648px"}} {...slideNav} top="0" right="0" height="72px" background="gradient.900" backgroundSize="600% 600%"  borderBottomLeftRadius="3px" display="flex" justifyContent="space-between" zIndex="1000"  alignItems="center">
          <Box padding="4">
            <Link as={ReachLink} to="/">
              <Image src={Logo} alt="asl logo" />
            </Link>
          </Box>
          <Box padding="4" display="flex" alignItems="center" justifyContent="center" zIndex={menu === 'nav' ? "2000" : ""} >
            <Text {...navText} minWidth="90px" display={{base: "none", lg: "block"}} onClick={openDrawer}>View menu</Text>
            <Hamburger isOpen={(isOpen && menu === 'nav')} toggle={openDrawer} />
          </Box>
          <Box onClick={() => toggleDrawer('contact')} bg="blue.800" padding="4" alignItems="center" height="100%" minWidth={{base: "40%", md:"222px"}} borderBottomLeftRadius="3.2px" justifyContent="center" display='flex'>
            <Image src={Chat} alt="chat bubble" color="#fff" marginRight="5px"/>
            <Text {...navText}>get in touch</Text>
          </Box>
        <Drawer autoFocus={false} placement="right" isOpen={isOpen} onClose={onClose} closeOnEsc closeOnOverlayClick size="xl">
        <DrawerOverlay />
        <DrawerContent animation={`${flow} infinite 15s ease`}  background={menu === 'nav' ? 'gradient.900' : 'gradient.800'}  zIndex="2000" backgroundSize="600% 600%" >
          <DrawerHeader minHeight="100px" padding="0" width="100%">
          {menu === 'contact' && <DrawerCloseButton color="#fff" padding="20px" />}
          {menu === 'nav' &&
            <Box display="flex" justifyContent="flex-end"  alignItems="center" height="72px" >
              <Box padding="4" >
              <Link as={ReachLink} to="/">
                <Image src={Logo} alt="asl logo" />
              </Link>
              </Box>
              <Box padding="4" display="flex" alignItems="center" justifyContent="center">
                <Text {...navText} minWidth="90px" display={{base: "none", lg: "block"}} onClick={openDrawer}>Close menu</Text>
                <Hamburger isOpen={(isOpen && menu === 'nav')} toggle={openDrawer} />
              </Box>
              <Box onClick={() => toggleDrawer('contact')} bg="blue.800" padding="4" margin="30px 0" alignItems="center" height="100%" minWidth={{base: "40%", md:"222px"}} borderBottomLeftRadius="3.2px" justifyContent="center" display='flex'>
                <Image src={Chat} alt="chat bubble" color="#fff" marginRight="5px"/>
                <Text {...navText}>get in touch</Text>
              </Box>
            </Box>
          }
          </DrawerHeader>
            <DrawerBody paddingRight={{base: "20px", lg: "100px"}}>
             {menuDisplay}
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
