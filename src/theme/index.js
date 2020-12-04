import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Load custom components
import { ButtonStyles as Button } from './button'

// Custom theme overrides
const overrides = {
    styles: {
        global: (props) => ({
            body: {
                fontFamily: "Bahnschrift Light",
                color: "blue.900"
            },
            // Global element styles - non specific
            a: {
                color: mode("blue.900")(props)
            }
        })
    },
    components: {
        Button
    },
    fonts: {
        heading: "Bahnschrift Regular"
    },
    textStyles: {
        h1: {
            fontSize: "60px",
            lineHeight: "72px",
            lettSpacing: "-2.12px"
        },
        h2: {
            fontSize: "44px",
            lineHeight: "53px",
            letterSpacing: "-1.55px"
        },
        h3: {
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: "-1.06px"
        },
        p: {
            fontSize: "20px",
            lineHeight: "38px",
            letterSpacing: "0.71px",
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
        gradient: {
            900: 'linear-gradient(151.59deg, #00ABAC 0%, #00AB69 100%)'
        }
    }
}

export default extendTheme(overrides)