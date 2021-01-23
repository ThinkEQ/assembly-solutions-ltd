import React, { Component } from 'react'
import { Link } from 'react-scroll'

class ReactScroll extends Component {
    render() {
        const { children} = this.props
        return (
            <Link
            to="what-we-do-home"
            smooth={true}
            spy={true}
            duration={1000}
            >
            {children}
            </Link>
        )
    }
}

export default ReactScroll

