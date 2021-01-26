import React from 'react'
import { graphql, StaticQuery} from 'gatsby'

// Load components
import Swiper from '../Swiper/Swiper'

const NewsArticles = ({ data }) => {
    return (
        <Swiper title="Latest News" data={data.edges} />
    )
}

export default () => (
    <StaticQuery
      query={graphql`
        query NewsArticleQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "news-article" } } }, limit: 10) 
            {
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
                      fluid(maxWidth: 600, quality: 90) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <NewsArticles data={data.allMarkdownRemark} />}
    />
  )
  