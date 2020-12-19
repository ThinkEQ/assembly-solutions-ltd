import React from 'react'
import { useStyleConfig, Box } from '@chakra-ui/react'

// Custom button styles
export const ButtonStyles = {
    // Styles all button have in common
    baseStyles: {
        fontWeight: "bold",
        borderRadius: "2px",
        fontFamily: "inherit",
    },
    sizes: {
        md: {
            fontSize: "14px",
            paddingTop: "2px",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            height: "3.5rem"
        }
    },
    variants: {
        solid: {
            bg: "green.900",
            color: "#fff"
        },
        gradient: {
            bg: "gradient.600",
            color: "#fff"
        },
        outline: {
            bg: "transparent",
            color: "#fff"
        }
    },
    defaultProps: {
        size: "md",
        variant: "solid"
    }
}

// Custom Button
function Button(props) {
    const { size, variant, ...rest } = props

    const styles = useStyleConfig("Button", { size, variant, })

    return <Box as="button" sx={styles} {...rest}  />
}

export default Button
