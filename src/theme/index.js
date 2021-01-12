import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Load custom components
import { ButtonStyles as Button } from './button'
import {LinkStyles as Link} from './link'

// Custom theme overrides
const overrides = {
    styles: {
        global: (props) => ({
            body: {
                fontFamily: "Bahnschrift Light",
                color: "blue.900"
            },
            // Global element styles - non specific
            ".mdx-prose": {
                a: {
                    color: mode("green.900")(props)
                },
                h1: {
                    fontSize: {base: "42px", md:"60px"},
                    lineHeight: {base: "62px", md:"72px"},
                    lettSpacing: "-2.12px"
                },
                h2: {
                    fontSize: {base: "28px", md:"44px"},
                    lineHeight: {base: "34px", md: "53px"},
                    letterSpacing: "-1.55px"
                },
                h3: {
                    fontSize: "30px",
                    lineHeight: "36px",
                    letterSpacing: "-1.06px"
                },
                h4: {
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "-1.06px"
                },
                p: {
                    fontSize: {base: "16px", md:"20px"},
                    lineHeight: "38px",
                    letterSpacing: "0.71px",
                },
                ul: {
                    listStyle: 'none'
                },
                "li::before": {
                    position: 'absolute',
                    top: '8px',
                    left: '0px',
                    content: "''",
                    borderRadius: "50%",
                    width: '15px',
                    height: "15px",
                    backgroundColor: mode("green.900")(props),
                },
                li: {
                    display: "block",
                    position: "relative",
                    paddingLeft: "30px",
                    paddingBottom: "10px",
                    fontSize: {base: "16px", md:"20px"},
                }
            }
        })
    },
    components: {
        Button,
        Link
    },
    fonts: {
        heading: "Bahnschrift Regular"
    },
    textStyles: {
        h1: {
            fontSize: {base: "42px", md:"60px"},
            lineHeight: {base: "62px", md:"72px"},
            lettSpacing: "-2.12px"
        },
        h2: {
            fontSize: {base: "28px", md:"44px"},
            lineHeight: {base: "34px", md: "53px"},
            letterSpacing: "-1.55px"
        },
        h3: {
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: "-1.06px"
        },
        h4: {
            fontSize: "24px",
            lineHeight: "36px",
            letterSpacing: "-1.06px"
        },
        p: {
            fontSize: {base: "16px", md:"20px"},
            lineHeight: "38px",
            letterSpacing: "0.71px",
        },
        section: {
            padding: {base: "6", lg:"16"}, 
        },
        container: {
            maxWidth: {base: "1000px", xl:"1600px"},
            margin: "0 auto"
        }
    },
    colors: {
        green: {
            900: '#00ABAC',
            800: '#00AB69',
        },
        purple: {
            900: '#3D518C',
            800: '#7692FF'
        },
        blue: {
            900: '#091540',
            800: '#1B2CC1',
        },
        neutral: {
            900: '#FAFAFA',
            800: "#A0A0A0",
            700: '#D9D9D9'
        },
        gradient: {
            900: 'linear-gradient(-45deg, #00ABAC 0%, #00AB69, #00ABAC, #00AB69 100%)',
            800: 'linear-gradient(184.08deg, #1B2CC1 0%, #091540 100%)',
            700: 'linear-gradient(270deg, rgba(36,155,171,0.05) 0%, rgba(36,155,171,0.5) 31.24%, #249BAB 100%)',
            600: 'linear-gradient(151.59deg, #00ABAC 0%, #00AB69 100%);' // button gradient
        }
    }
}

export default extendTheme(overrides)