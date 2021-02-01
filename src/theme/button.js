import React from 'react'
import { useStyleConfig, Box, keyframes } from '@chakra-ui/react'

const flow = keyframes `
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`

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
        },
        full: {
            fontSize: "14px",
            paddingTop: "2px",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            height: "100%",
            width: "100%"
        }
    },
    variants: {
        solid: {
            bg: "gradient.500",
            color: "#fff",
            borderColor: "green.900",
            backfaceVisibility: "hidden",
            'WebkitBackfaceVisibility': "hidden",
            _hover: {
                bg: "gradient.900",
                borderColor: "green.900",
                backgroundSize: "600% 600%",
                animation: `${flow} infinite 10s ease`
            },
            _active: {
                bg: "gradient.500",
                borderColor: "green.900",
            }
        },
        gradient: {
            bg: "gradient.600",
            color: "#fff"
        },
        outline: {
            bg: "transparent",
            position: "relative",
            background: "none",
            color: "#fff",
            transition: ".5s all ease",
            _before: {
                height: "100%",
                width: "100%",
                position: "absolute",
                content: "''",
                top: 0,
                left: 0,
            },
            _after: {
                transition: ".5s all ease",
                background: "transparent",
                height: "0",
                width: "0",
                position: "absolute",
                content: "''",
                top: "50%",
                left: "50%",
            },
            _active: {
                bg: "#fff",
                color: "green.900"
            },
            _hover: {
                background: "transparent",
                color: "green.900",
                zIndex: "10",
                '&::after': {
                    position: "absolute",
                    content: "''",
                    background: "#fff",
                    height: "100%",
                    left: "0",
                    top: "0",
                    width: "100%",
                    borderRadius: "2px",
                    zIndex: "-1"
                }
            }
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
