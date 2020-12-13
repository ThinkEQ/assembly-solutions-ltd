import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import TeamCard from '../components/Cards/TeamCard/TeamCard'

// Load layout
import Layout from '../components/Layout'

export const TeamPageTemplate = ({ title, teamMembers }) => {

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
          <Text textStyle="p" marginBottom="20px" fontSize="22px">
              {title}
            </Text>
            <Heading as="h1" textStyle="h1">
              We have built a team on the foundation of family values and all share the passion of delivering a quality service
            </Heading>
        </Box>
      </Box>
      <Box as="section" textStyle="section" position="relative" overflow="hidden">
          <SimpleGrid minChildWidth="220px" justifyContent="center" spacing="40px" >
             {teamMembers.length > 0 && 
              teamMembers.map((team) => {
                return (
                <TeamCard 
                teamImg={team.image} 
                name={team.name} 
                jobTitle={team.jobtitle} 
                bio={team.bio} 
                linkedIn={team.linkedin} 
                iconList={team.interests}  />
                )
              })}
          </SimpleGrid>
      </Box>
    </Fragment>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)

  return (
    <Layout>
      <TeamPageTemplate
        title={post.frontmatter.title}
        teamMembers={post.frontmatter.team_members}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        team_members {
          bio
          interests
          jobtitle
          linkedin
          name
          image {
            childImageSharp {
              fluid(maxHeight: 263, maxWidth: 292, quality: 80) {
                ...GatsbyImageSharpFluid
                presentationHeight
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
`
