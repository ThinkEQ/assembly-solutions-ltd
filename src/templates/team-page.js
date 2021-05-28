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

const TeamPageTemplate = ({ title, teamMembers }) => {
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
            <Button variant="solid" onClick={() => navigate('/videos')}>Our Videos</Button> 
            </Box>
        </Box>
      </Box>
      <Box as="section">
          <CarouselWhatWeDo />
      </Box>
      <Modal scrollBehavior="outside" isOpen={isOpen} autoFocus={false} onClose={onClose} closeOnEsc closeOnOverlayClick size="xl">
      <ModalOverlay />
        <ModalContent padding="0" marginTop="0rem" top={{base: "0", md:"50%"}} transform={{base: "none", md:"translateY(-50%) !important"}} minHeight={{base:"100vh", md: "auto"}} minWidth="70vw">
          <ModalHeader padding="0" position="relative">
            <TeamHeader name={teamMember.name} />
            <ModalCloseButton color="#fff" padding="20px" borderRadius="50%" top="50%" right="20px" transform="translateY(-50%)" _focus _hover={{ backgroundColor: "neutral.900", borderRadius: "50%", color: "blue.900"}} />
          </ModalHeader>
          <ModalBody padding="0">
            <TeamBody iconList={teamMember.interests} bio={teamMember.bio} linkedIn={teamMember.linkedIn} />
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
    <Layout metaTitle={title} metaDescription={description} ogUrl={post.frontmatter.seo.og_url}>
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

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seo {
          title
          description
          og_url
        }
        team_members {
          bio
          interests
          jobtitle
          linkedin
          name
          image {
            childImageSharp {
              fluid(maxHeight: 263, maxWidth: 292, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
export default TeamPage