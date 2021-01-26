import React, { Fragment } from 'react'
import { Link as ReachLink } from 'gatsby'

// Load components
import CardArticle from '../Cards/CardArticle/CardArticle'
import { Heading, Link, SimpleGrid } from '@chakra-ui/react'

const Roll = ({ data, title}) => {
    const { edges: posts } = data.allMarkdownRemark
  
    return (
      <Fragment>
        <Heading textStyle="h1" fontSize="40px" marginBottom="20px">
          {title} <sup>{posts && posts.length}</sup>
        </Heading>
        <SimpleGrid minChildWidth={{base: "100%", md: "45%"}} padding={{base: "2", md:"8"}} spacing="40px">
          {posts &&
            posts.map((post, index) => {
            return (
                <Link as={ReachLink} to={posts[index].node.fields.slug} _hover={{textDecoration: "none"}} textDecoration="none" key={posts[index].node.id}>
                  <CardArticle 
                      key={posts[index].node.id}
                      title={posts[index].node.frontmatter.title}
                      imgFluid={posts[index].node.frontmatter.image}
                      date={posts[index].node.frontmatter.date}
                    />
              </Link>
            )
          })}
        </SimpleGrid>
      </Fragment>
    )
}
export default Roll

