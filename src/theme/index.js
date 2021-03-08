import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

// Load custom components
import { ButtonStyles as Button } from './button'
import {LinkStyles as Link} from './link'

const breakpoints = createBreakpoints({
    xxl: "1500px"
})

// Custom theme overrides
const overrides = {
    styles: {
        global: (props) => ({
            body: {
                fontFamily: "Source Sans Pro",
                fontWeight: 300,
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
                    marginBottom: "20px",
                    lettSpacing: "-2.12px",
                    fontWeight: 600
                },
                h2: {
                    fontSize: {base: "28px", md:"44px"},
                    lineHeight: {base: "34px", md: "53px"},
                    letterSpacing: "-1.55px",
                    marginBottom: "20px",
                    fontWeight: 600
                },
                h3: {
                    fontSize: "30px",
                    lineHeight: "36px",
                    letterSpacing: "-1.06px",
                    marginBottom: "20px",
                    fontWeight: 600
                },
                h4: {
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "-1.06px",
                    marginBottom: "10px",
                    fontWeight: 600
                },
                p: {
                    fontSize: {base: "16px", md:"20px"},
                    lineHeight: {base: "28px", md:"38px"},
                    letterSpacing: "0.71px",
                    marginBottom: "20px"
                },
                ul: {
                    listStyle: 'none',
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
                        fontFamily: "inherit",
                        fontSize: {base: "16px", md:"20px"},
                    }
                    
                },
                ol: {
                    fontSize: "18px",
                    marginLeft: {base: "5px", lg: "0" },
                    li: {
                        fontFamily: "inherit",
                        fontSize: {base: "16px", md:"20px"},
                        _first: {
                            marginBottom: "10px"
                        }
                    }
                }
            }
        })
    },
    components: {
        Button,
        Link
    },
    breakpoints,
    fonts: {
        heading: "Source Sans Pro"
    },
    layerStyles: {
        brightness: {
            filter: "brightness(100%)",
            transition: ".6s ease-in-out",
            _hover: {
                filter: "brightness(50%)"
            }
        }
    },
    textStyles: {
        h1: {
            fontSize: {base: "42px", md:"60px"},
            lineHeight: {base: "62px", md:"72px"},
            marginBottom: "20px",
            lettSpacing: "-2.12px",
            fontWeight: 600
        },
        h2: {
            fontSize: {base: "28px", md:"44px"},
            lineHeight: {base: "34px", md: "53px"},
            letterSpacing: "-1.55px",
            marginBottom: "20px",
            fontWeight: 600
        },
        h3: {
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: "-1.06px",
            marginBottom: "20px",
            fontWeight: 600
        },
        h4: {
            fontSize: "24px",
            lineHeight: "36px",
            letterSpacing: "-1.06px",
            marginBottom: "10px",
            fontWeight: 600
        },
        p: {
            fontSize: {base: "16px", md:"20px"},
            lineHeight: {base: "28px", md:"38px"},
            letterSpacing: "0.71px",
            marginBottom: "10px"
        },
        section: {
            py: {base: "6", lg:"40px"},
            paddingLeft: {base: "5%", lg: "140px"},
            paddingRight: {base: "5%", lg: "140px"}
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
            900: 'linear-gradient(-45deg, #00ABAC 0%, #00ABAC, #00AB69, #00ABAC, #00ABAC 100%)',
            //900: 'linear-gradient(-45deg, #00AB69 0%, #00ABAC, #00AB69, #00ABAC 100%)',
            950: 'linear-gradient(-45deg, #FFF0 100%, #FFF, #FFF, #FFF 0%))',
            800: 'linear-gradient(184.08deg, #1B2CC1 0%, #091540 100%)',
            700: 'linear-gradient(270deg, rgba(36,155,171,0.05) 0%, rgba(36,155,171,0.5) 31.24%, #249BAB 100%)',
            600: 'linear-gradient(151.59deg, #00ABAC 0%, #00AB69 100%);', // button gradient
            500: 'linear-gradient(-45deg, #00ABAC 0%, #00ABAC, #00ABAC, #00ABAC 100%)', // button gradient non hover
            400: 'linear-gradient(0deg, #FAFAFA 50%, #091540 50%)', //  top / bottom split
            50: 'radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(250,250,250,1) 42%);', // circle gradient
            300: 'linear-gradient(-45deg, #091540 0%, #10225a, #152d71, #091540 50%)',
            200: 'linear-gradient(-45deg, #091540 0%, #091540, #091540, #091540 100%)'
        }
    }
}

export default extendTheme(overrides)