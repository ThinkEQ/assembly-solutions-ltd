import React from 'react'
import { Link as ReachLink } from 'gatsby'
import { Field } from 'formik'

// Load components
import { Box, Heading, Input, Button, InputGroup, InputRightElement, Text, ListItem, List, Link, FormErrorMessage, FormControl } from '@chakra-ui/react'
import Svg from './UI/SVG/index'
import FormProvider from './Form/Form'

const para = {
  fontSize: "18px",
  lineHeight: "20px",
  fontFamily: "inherit",
  fontWeight: "600"
}

const SignUp = ({ isSubmitting }) => {
  return (
    <Field name="email">
    {({ field, form }) => (
      <FormControl id="email" isInvalid={form.errors.email && form.touched.email}>
        <InputGroup size="lg">
          <Input {...field} borderRadius="3px" id="email" name="email" type="email" aria-label="email" color="blue.900" placeholder="name@email.com" borderColor="blue.900" border="none" height={{base: "51px", md:"72px"}} background="#fff" />
          <InputRightElement width={{base: "110px", md:"175px"}} padding="0" children={<Button variant="solid" size="full" type="submit" isLoading={isSubmitting} loadingText="Submitting" paddingRight={{base: "0", md: "2.5rem"}} paddingLeft={{base: "0", md: "2.5rem"}} whiteSpace="nowrap">Sign up</Button>} height={{base: "51px", md:"72px"}} background="green.900" fontWeight="bold" borderTopRightRadius="3px" borderBottomRightRadius="3px" />
        </InputGroup>
        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
      </FormControl>
      )}
    </Field>
  )
}


const Footer = ({ toggleDrawer }) => {
  return(
    <Box background="blue.900" color="#fff" textStyle="section" py="80px">
      <Box textStyle="container">
        <Heading fontSize="30px" lineHeight="36px" fontWeight="600" marginBottom="30px">
          Stay Connected
        </Heading>

        <Box display="flex" flexDirection={{base: "column", lg:"row"}} alignItems="flex-start" justifyContent="space-between">
          <Box width={{base: "100%", lg:"48%"}} marginBottom={{base: "30px", lg: "0"}}>
            <FormProvider url="/subscribed" formName="signup" initialValues={{email: ""}}>
                <SignUp />
            </FormProvider>
              <Box display="flex" alignItems="flex-start" justifyContent="space-between" width={{base: "100%", lg:"80%"}} marginTop="20px">
              <Text {...para} fontSize={{base: "14px", lg: "18px"}} >
                ASL <br/> Newsletter
              </Text>
              <Text {...para} fontSize={{base: "14px", lg: "18px"}}>
                Sign up to our newsletter <br/> for the latest news.
              </Text>
            </Box>
          </Box>

          <Box width={{base: "100%", lg:"48%"}} display="flex" justifyContent="space-between" paddingTop="10px">
            <List spacing="4">
              <ListItem {...para}>
                <Link as={ReachLink} to="/cable-assembly">
                  Cable Assembly
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/wire-and-cable-preparation">
                  Wire Preparation
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/wiring-harness">
                  Wiring Harness
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/control-panels">
                  Control Panels
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/wiring-loom">
                  Wiring Looms
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/cable-assemblies">
                  Cable Assemblies
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/electrical-control-panels">
                  Electrical Control Panels
                </Link>
              </ListItem>
            </List>

            <List spacing="4">
              <ListItem {...para}>
              <Link as={ReachLink} to="/about">
              About
              </Link>
            </ListItem>
            <ListItem {...para}>
                <Link as={ReachLink} to="/team">
                  Team
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/videos">
                  Videos
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/news">
                News
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/projects">
                Projects
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/industries">
                  Industries
                </Link>
              </ListItem>
              <ListItem {...para}>
                <Link as={ReachLink} to="/contact">
                  Contact Us
                </Link>
              </ListItem>
            </List>
            <List spacing="4" display={{base: "none", lg: "block"}}>
              <ListItem {...para} fontWeight="300">
                <Link as={ReachLink} to="/terms-and-conditions">
                  Terms of Use
                </Link>
              </ListItem>
              <ListItem {...para} fontWeight="300">
                <Link as={ReachLink} to="/privacy-policy">
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/oh-s-policy-statement.pdf" target="_blank">
              OH&S Policy Statement
            </a>
          </ListItem>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/environment-policy-statement.pdf" target="_blank">
              Environment Policy Statement
            </a>
          </ListItem>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/quality-policy-statement.pdf" target="_blank">
              Quality Policy Statement
            </a>
          </ListItem>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/iso-45001-certificate.pdf" target="_blank">
              ISO 45001 Certificate
            </a>
          </ListItem>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/iso-9001-certificate.pdf" target="_blank">
              ISO 9001 Certificate
            </a>
          </ListItem>
              <ListItem display="flex" justifyContent="center">
                <Svg name="twentyEmblem" fill="#fff" width="85px" height="90px" />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box display="flex" flexDirection={{base: "column", lg: "row"}} alignItems={{base: "flex-start", lg:"center"}} justifyContent="space-between" marginTop={{base: "50px", lg: "40px"}}>
          <Box display="flex" alignItems="flex-start" justifyContent="space-between" width="125px" marginBottom={{base: "30px", lg: "0"}}>
            <Link href="https://youtube.com/channel/UCm-VKCwJo14nlcp8RzrUMUw" target="_blank" isExternal cursor="pointer">
              <Svg name="youtube" />
            </Link>
            <Link href="https://www.linkedin.com/company/asl-bolton/" margin="0 15px" target="_blank" isExternal cursor="pointer">
              <Svg name="linkedin" />
            </Link>
            <Link href="https://www.instagram.com/assemblysolutionsltd" marginRight="15px" target="_blank" isExternal cursor="pointer">
              <Svg name="instagram" fill="#00ABAC" />
            </Link>
          </Box>

        <List justifyContent="space-around" alignItems="flex-start" width="100%" marginBottom="20px" display={{base: "flex", lg: "none"}}>
          <ListItem {...para} fontWeight="300">
            <Link as={ReachLink} to="/terms-and-conditions">
              Terms of Use
            </Link>
          </ListItem>
          <ListItem {...para} fontWeight="300">
            <Link as={ReachLink} to="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </ListItem>
          </List>
          <List justifyContent="space-around" alignItems="flex-start" width="100%" marginBottom="20px" display={{base: "flex", lg: "none"}}>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/oh-s-policy-statement.pdf" target="_blank">
              OH&S Policy Statement
            </a>
          </ListItem>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/environment-policy-statement.pdf" target="_blank">
              Environment Policy Statement
            </a>
          </ListItem>
        </List>
        <List justifyContent="space-around" alignItems="flex-start" width="100%" marginBottom="20px" display={{base: "flex", lg: "none"}}>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/quality-policy-statement.pdf">
              Quality Policy Statement
            </a>
          </ListItem>
        <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/iso-45001-certificate.pdf" target="_blank">
              ISO 45001 Certificate
            </a>
          </ListItem>
        </List>
        <List justifyContent="space-around" alignItems="flex-start" width="100%" marginBottom="20px" display={{base: "flex", lg: "none"}}>
          <ListItem {...para} fontWeight="300" fontSize="16px">
            <a href="/docs/iso-9001-certificate.pdf">
              ISO 9001 Certificate
            </a>
          </ListItem>
        </List>
          <Box>
            <Text fontSize="14px" lineHeight="17px" marginBottom={{base: "20px", lg: "0"}}>
              Assembly Solutions Ltd is registered in England  under registration number 3131352.
            </Text>
            <Text {...para} textAlign={{base: "left", lg:"right"}} fontWeight="bold" marginTop="10px">
              ASL &copy;2021
            </Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  ) 
}

export default Footer
