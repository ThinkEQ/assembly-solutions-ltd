import React from 'react'
import { Link as ReachLink, graphql, StaticQuery } from 'gatsby'

// Load components
import { Link, MenuItem } from '@chakra-ui/react'

const style = {
    color: 'gray.600',
    _hover: {
        textDecoration: 'none',
        color: 'blackAlpha.900'
    }
}

const MarketsMenu = ({ data }) => {
    const list = data.allMarkdownRemark.edges
    return (
        list && list.map((item) => {
            return (
                <MenuItem pb={0}>
                    <Link as={ReachLink} to={item.node.fields.slug} size="md" {...style}>
                        {item.node.frontmatter.title}
                    </Link>
                </MenuItem>
            )
        })
    )
}

const MarketsQuery = () => (
    <StaticQuery
       query={graphql`
       query MarketsListQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "markets-article"}}}) {
            edges {
                node {
                    id
                    frontmatter {
                    title
                    }
                    fields {
                    slug
                    }
                }
                }
            }
        }
       `}
       render={(data) => <MarketsMenu data={data} />}
     />
)

export default MarketsQuery