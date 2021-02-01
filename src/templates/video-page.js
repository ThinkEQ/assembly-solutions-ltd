import React, { Fragment, useState } from 'react'

// Load components
import Layout from '../components/Layout'
import { Box, Heading, SimpleGrid, Text, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Pagination from '../components/Pagination/Pagination'
import { graphql } from 'gatsby'
import CardVideo from '../components/Cards/CardVideo/CardVideo'

const VideoCard = ({ videoSrc }) => {
  return (
      <Box paddingBottom="50%" position="relative" height="0" overflow="hidden">
        <iframe width="100%"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${videoSrc}`}
          frameborder="0"
          title="youtube"
          style={{border: 0, position: "absolute", top: 0, left: 0, width:"100%", height:"100%"}}
          allowfullscreen />
      </Box>
  )
}

export const VideoIndexTemplate = ({ videos, pagination }) => {
  const {isOpen, onOpen, onClose } = useDisclosure()
  const [vidSrc, setSrc] = useState('')

  function triggerModal(video) {
      setSrc(video)
      onOpen()
  }
  
  return (
      <Fragment>
          <Box as="header" textStyle="section" >
              <Box textStyle="container" paddingTop={{base: "100px", lg:"50px"}}>
                  <Text textStyle="p" marginBottom="20px" fontSize="22px">
                    Videos
                  </Text>
                  <Heading as="h1" textStyle="h1" width={{base: "100%", lg:"80%"}} marginBottom={{base: "20px", lg: "0"}}>
                    Watch our videos to see where the magic happens and to learn more about our processes and products
                  </Heading>
                </Box>
            </Box>
            <Box as="section" textStyle="section" minHeight="500px" backgroundColor="neutral.900">
              <Box textStyle="container">
              <Heading textStyle="h1" fontSize="40px" marginBottom="20px">
                All videos <sup>{videos && videos.length}</sup>
              </Heading>
                <SimpleGrid minChildWidth={{base: "100%", md: "45%"}} padding={{base: "2", md:"8"}} spacing="40px">
                  {videos.map((video, index) => {
                    return (
                      <CardVideo 
                        key={index}
                        imgSrc={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        title={video.name}
                        click={() => triggerModal(video.id)}
                      />
                    )
                  })} 
                </SimpleGrid>
              
                {pagination.numberOfPages > 1 &&
                  <Box display="flex" justifyContent="flex-end" padding={{base: "0 10px", md: "0 30px"}}>
                    <Pagination currentPage={pagination.humanPageNumber} totalPages={pagination.numberOfPages} nextPage={pagination.nextPagePath} />
                  </Box>}
              </Box>
          </Box>
          <Modal onClose={onClose} size="100%" motionPreset="scale" isOpen={isOpen} isCentered closeOnEsc>
            <ModalOverlay />
            <ModalContent width="80%">
              <ModalBody padding="0">
                <VideoCard videoSrc={vidSrc} />
              </ModalBody>
            </ModalContent>
          </Modal>
    </Fragment>
  )
}

const VideosIndex =  ({data, pageContext}) => {
  const { edges: posts } = data.allMarkdownRemark
  const { seo } = posts[0].node.frontmatter
  const title = seo ? seo.title : posts[0].node.frontmatter.title
  const description = seo ? seo.description : undefined
  return (
    <Layout metaTitle={title} metaDescription={description}>
      <VideoIndexTemplate videos={posts[0].node.frontmatter.video || []} pagination={pageContext} />
    </Layout>
  )
}

export const videoIndexQuery = graphql`
query VideosIndexQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    skip: $skip
    limit: $limit
    filter: { frontmatter: { templateKey: { eq: "video-page" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        html
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          seo {
            title
            description
          }
          video {
            name
            id
          }
        }
      }
    }
  }
}
`

export default VideosIndex
