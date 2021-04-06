import React, { Fragment, useState} from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

// Load components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'
import { ChakraProvider, useDisclosure, Box, Text } from '@chakra-ui/react'
import CookieConsent from 'react-cookie-consent'

// Load theme
import theme from '../theme/index'

const TemplateWrapper = ({ children, metaTitle, metaDescription }) => {
  const { title, description } = useSiteMetadata()
  
  const [menu, setMenu] = useState(false)
  const {isOpen, onClose, onOpen } = useDisclosure()

  function toggleDrawer(type) {

    // Close the drawer
    if (isOpen && type === menu) {
      return onClose()
    }

    // Delay to allow transatiion to change drawer content
    if(isOpen && type !== menu) {
     onClose()

     return setTimeout(() => {
      setMenu(type)
      onOpen()
     }, 500)
    }

    // Open the drawer
    setMenu(type)
    onOpen()
    return
  }

  
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{metaTitle || title}</title>
        <meta name="description" content={metaDescription || description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <link rel="manifest"  href={`${withPrefix('/')}img/site.webmanifest`} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
       {/*  <meta property="og:url" content="/" />
        <meta property="author" content="Magma" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        /> */}
        <script type="text/javascript" src="https://secure.iron0walk.com/js/207700.js" ></script>
        <noscript>{`<img alt="" src="https://secure.iron0walk.com/207700.png" style="display:none;" />`}</noscript>
      </Helmet>

      <form
        hidden
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="telephone" />
        <input type="textarea" name="enquiry" />
      </form>
      <form
      hidden
      name="signup"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="email" name="email" />
    </form>
    <CookieConsent
      location="bottom"
      enableDeclineButton
      style={{
        width: "100%",
        padding: "20px 0"
      }}
      buttonStyle={{ fontWeight: "bold",  borderRadius: "6px", padding: "10px 15px"}}
      declineButtonStyle={{ fontWeight: "bold", borderRadius: "6px", padding: "10px 15px"}}
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      expires={150}
    >
      <Text>
        This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.
        We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.
      </Text>
    </CookieConsent>

      <ChakraProvider theme={theme}>
            <Navbar menu={menu} toggleDrawer={toggleDrawer} isOpen={isOpen} onClose={onClose} />
            <Box as="main" minHeight="100vh">
              {children}
            </Box>
            <Box as="footer">
              <Footer toggleDrawer={toggleDrawer}  />
            </Box>
      </ChakraProvider>
    </Fragment>
  )
}

export default TemplateWrapper
