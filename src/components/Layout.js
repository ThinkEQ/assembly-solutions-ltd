import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

// Load components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'
import { ChakraProvider } from '@chakra-ui/react'

// Load theme
import theme from '../theme/index'

const TemplateWrapper = ({ children, metaTitle, metaDescription }) => {
  const { title, description } = useSiteMetadata()
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
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <ChakraProvider theme={theme}>
          <nav>
            <Navbar />
          </nav>
          <main>
            {children}
          </main>
          <Footer />
      </ChakraProvider>
    </Fragment>
  )
}

export default TemplateWrapper
