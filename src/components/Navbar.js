import React from 'react'
import { Link as ReachLink } from 'gatsby'
import { Field } from 'formik'

// Load assets
import Logo from '../img/logo.svg'

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
          <Input {...field} id="telephone" name="telephone" type="tel" pattern focusBorderColor="green.900" type="tel" size="lg" height="67px" display="inline-block" />
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
    <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" target="_blank" isExternal cursor="pointer">
      <SVG name="youtube" fill="#fff" />
    </Link>
    <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
      <SVG name="linkedin" fill="#fff" />
    </Link>
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
    <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" target="_blank" isExternal cursor="pointer">
      <SVG name="youtube" fill="#fff" />
    </Link>
    <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
      <SVG name="linkedin" fill="#fff" />
    </Link>
    <Text color="#fff" fontSize="18px" marginRight="10px">
      ASL &copy;2020
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
          <Text as="a" href="mailto:enquiry@assembly-solutions.com" target="_blank" fontSize="26px" fontWeight="bold" lineHeight="31px">
            E: Enquiries@
          </Text>

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
     <Box animation={`${flow} infinite 15s ease`} position={{base: "fixed", md: "absolute"}} width={{base:"100%", md: "auto"}} top="0" right="0" height="72px" background={"gradient.900"} backgroundSize="600% 600%"  borderBottomLeftRadius="3px" display="flex" justifyContent="space-between" zIndex={!isOpen ? "1000" : ""} alignItems="center">
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
            <DrawerBody paddingRight={{base: "20px", lg: "100px"}}>
             {menuDisplay}
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
