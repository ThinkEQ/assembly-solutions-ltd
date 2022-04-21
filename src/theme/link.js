import React from 'react'
import { useStyleConfig, Box } from '@chakra-ui/react'

// Custom button styles
export const LinkStyles = {
    // Styles all button have in common
    baseStyles: {
        fontFamily: "inherit",
        fontSize: "16px"
    },
    sizes: {
        md: {
            fontSize: "18px"
        },
        lg: {
            fontSize: "34px",
        }
    },
    variants: {
        page: {
            display: 'block'
        },
        nav: {
            color: "#fff",
            display: "inline-block",
            position: "relative",
            transition: "transform .5s ease",
            textDecoration: "none",
            _before: {
                position: "absolute",
                content: "''",
                bottom: 0,
                left: 0,
                width: "0%",
                height: "2px",
                background: "#fff",
                transition: "width .5s ease",
            },
            _visited: {
                outline: 'none',
                border: "none",
            },
            _focus: {
                outline: 'none',
                border: "none",
                boxShadow: 'none'
            },
            _hover: {
                textDecoration: "none",
                '&::before': {
                   width: "100%"
                },
            }
        },
        navAlt: {
            color: "gray.600",
            display: "inline-block",
            position: "relative",
            transition: "transform .5s ease",
            textDecoration: "none",
            zIndex: 2000,
            _before: {
                position: "absolute",
                content: "''",
                bottom: "-18px",
                left: 0,
                width: "0%",
                height: "2px",
                background: "#111111",
                //transition: "width .5s ease",
            },
            _visited: {
                outline: 'none',
                border: "none",
            },
            _focus: {
                outline: 'none',
                border: "none",
                boxShadow: 'none'
            },
            _hover: {
                textDecoration: "none",
                color: 'blackAlpha.900',
                '&::before': {
                   width: "100%"
                },
            }
        },
    },
    defaultProps: {
        size: "md",
        variant: "page"
    }
}

// Custom Button
function Link(props) {
    const { size, variant, activeStyle, ...rest } = props

    const styles = useStyleConfig("Link", { size, variant })
   
    return <Box as="a" sx={styles} {...rest}  />
}

export default Link