import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Load components
import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react'
import TeamCard from '../components/Cards/TeamCard/TeamCard'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'

// Load layout
import Layout from '../components/Layout'

export const TeamPageTemplate = ({ title, teamMembers }) => {

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
          <Box textStyle="container">
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                {title}
              </Text>
              <Heading as="h1" textStyle="h1" maxWidth={{base: "100%", lg: "80%"}}>
                We have built a team on the foundation of family values and all share the passion of delivering a quality service
              </Heading>
          </Box>
      
        </Box>
      </Box>
      <Box as="section" textStyle="section">
        <Box textStyle="container">
          <SimpleGrid minChildWidth="220px" position="relative" spacing="20px" >
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
            <Box marginTop="30px" textAlign="center">
              <Button variant="solid">Find out more about us</Button>
            </Box>
        </Box>
      </Box>
      <Box textStyle="section" as="section" minHeight="700px" background="neutral.900">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
    </Fragment>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : undefined
  const description = seo ? seo.description : undefined

  return (
    <Layout metaTitle={title} metaDescription={description}>
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
        seo {
          title
          description
        }
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
