import React from 'react'
import { graphql, StaticQuery} from 'gatsby'

// Load components
import SliderItems from '../Slider/SlideItems'

const RelatedProjects = ({ data }) => {
    return (
        <SliderItems title="Related Projects" data={data.edges} />
    )
}

export default () => (
    <StaticQuery
      query={graphql`
        query RelatedProjectsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "project-article" } } }, limit: 10) 
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
                  image {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <RelatedProjects data={data.allMarkdownRemark} />}
    />
  )