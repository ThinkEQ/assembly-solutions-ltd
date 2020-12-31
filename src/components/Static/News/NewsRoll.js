import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link as ReachLink, graphql, StaticQuery } from 'gatsby'

// Load components
import Card from '../../Cards/CardNews/CardNews'
import { Heading, Link, SimpleGrid } from '@chakra-ui/react'

const NewsRoll = ({ data, count}) => {
    const { edges: posts } = data.allMarkdownRemark
  
    return (
      <Fragment>
        <Heading textStyle="h1" fontSize="40px" marginBottom="20px">
          All articles <sup>60</sup>
        </Heading>
        <SimpleGrid minChildWidth="45%" padding="8" spacing="40px">
          {posts &&
            posts.map((post, index) => {
            return (
                <Link as={ReachLink} to={posts[index].node.fields.slug} _hover={{textDecoration: "none"}} textDecoration="none" key={posts[index].node.id}>
                  <Card 
                      key={posts[index].node.id}
                      title={posts[index].node.excerpt}
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

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-article" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxHeight: 600, quality: 80) {
                      ...GatsbyImageSharpFluid
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
)