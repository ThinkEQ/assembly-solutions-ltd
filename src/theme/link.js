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
            fontSize: "16px"
        },
        lg: {
            fontSize: "44px",
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
            _hover: {
                textDecoration: "none",
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