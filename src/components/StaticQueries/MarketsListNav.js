import React from 'react'
import { Link as ReachLink, graphql, StaticQuery } from 'gatsby'

// Load components
import { Link, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'

const MarketsMenu = ({ data }) => {
    const list = data.allMarkdownRemark.edges
    return (
        <Menu>
            <MenuButton as={Link}>
               Markets
            </MenuButton>
            <MenuList>
                {list && list.map((item) => {
                    return (
                        <MenuItem>
                            <Link as={ReachLink} fontWeight="bold" to={item.node.fields.slug} size="md">
                                {item.node.frontmatter.title}
                            </Link>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
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