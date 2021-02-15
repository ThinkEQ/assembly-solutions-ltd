import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'

// Load components
import { Box, Heading, Text, SimpleGrid, Button, Modal, ModalBody, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import TeamCard, { TeamBody, TeamHeader } from '../components/Cards/TeamCard/TeamCard'
import CarouselWhatWeDo from '../components/Carousel/CarouselWhatWeDo'

// Load layout
import Layout from '../components/Layout'

export const TeamPageTemplate = ({ title, teamMembers }) => {
  const [teamMember, setTeamMember] = useState({})
  const {isOpen, onOpen, onClose} = useDisclosure()

  function loadMember(member) {
      setTeamMember(member)
      onOpen()
  }

  return (
    <Fragment>
      <Box as="header" paddingTop={{base: "100px", lg:"50px"}}>
        <Box textStyle="section">
          <Box textStyle="container">
              <Text textStyle="p" marginBottom="20px" fontSize="22px">
                {title}
              </Text>
              <Heading as="h1" textStyle="h2" maxWidth={{base: "100%", lg: "80%"}}>
                We have built a team on the foundation of family values and all share the passion of delivering a quality service
              </Heading>
          </Box>
      
        </Box>
      </Box>
      <Box as="section" textStyle="section">
        <Box textStyle="container" >
          <SimpleGrid minChildWidth={{base: "220px",  xl: "23%"}}  position="relative" spacing="20px" >
              {teamMembers.length > 0 && 
                teamMembers.map((team) => {
                  return (
                        <TeamCard 
                      teamImg={team.image} 
                      name={team.name} 
                      jobTitle={team.jobtitle} 
                      bio={team.bio} 
                      linkedIn={team.linkedin} 
                      iconList={team.interests}  
                      click={loadMember}
                      />
                  )
                })}
            </SimpleGrid>
            <Box marginTop="30px" textAlign="center">
            <Button variant="solid" onClick={() => navigate('/about')}>Find out more about us</Button> 
            </Box>
        </Box>
      </Box>
      <Box textStyle="section" as="section" minHeight={{base: "600px", lg:"800px"}} background="gradient.50">
        <Box textStyle="container" position="relative">
          <CarouselWhatWeDo />
        </Box>
      </Box>
      <Modal isCentered isOpen={isOpen} autoFocus={false} onClose={onClose} closeOnEsc closeOnOverlayClick size="xl">
      <ModalOverlay />
        <ModalContent padding="0" minWidth="70vw">
          <ModalHeader padding="0">
            <TeamHeader name={teamMember.name} />
            <ModalCloseButton color="#fff" padding="20px" />
          </ModalHeader>
          <ModalBody padding="0" maxHeight="50vh" overflow="auto">
            <TeamBody iconList={teamMember.interests} bio={teamMember.bio} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { seo } = post.frontmatter
  const title = seo ? seo.title : post.frontmatter.title
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
          name
          image {
            childImageSharp {
              fluid(maxHeight: 263, maxWidth: 292, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
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
