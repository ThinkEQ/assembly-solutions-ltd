const _ = require('lodash')
const path = require('path')
const slugify = require('slugify')
const { paginate } = require('gatsby-awesome-pagination')
const { createFilePath } = require('gatsby-source-filesystem')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// Replacing '/' would result in empty string which is invalid
// Remove trailing /
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              products
              title
              image {
                childImageSharp {
                  fluid(maxHeight: 457, quality: 80) {
                    base64
                    aspectRatio
                    src
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const products = posts.filter(post => post.node.frontmatter.templateKey === 'product')
    const news = posts.filter(post => post.node.frontmatter.templateKey === 'news-article')
    const projects = posts.filter(post => post.node.frontmatter.templateKey === 'project-article')
    const videos = posts.filter(post => post.node.frontmatter.templateKey === 'video-page')
   
     // Create your paginated pages
     paginate({
      createPage, // The Gatsby `createPage` function
      items: news, // An array of objects
      itemsPerPage: 8, // How many items you want per page
      pathPrefix: '/news', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve('src/templates/news.js'), // Just like `createPage()`
    })

    // Create your paginated pages
    paginate({
      createPage, // The Gatsby `createPage` function
      items: projects, // An array of objects
      itemsPerPage: 6, // How many items you want per page
      pathPrefix: '/projects', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve('src/templates/projects.js'), // Just like `createPage()`
    })

    posts.forEach((edge) => {
      const id = edge.node.id
      const productArr = edge.node.frontmatter.products ? edge.node.frontmatter.products : []
      
      // Use title for these roots to keep site flat i.e replace /product/:slug => /:slug 
      edge.node.fields.slug = ['product', 'product-category'].includes(edge.node.frontmatter.templateKey) ? slugify(edge.node.frontmatter.title, {lower: true, strict: true}) : replacePath(edge.node.fields.slug)
      
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          products: products.filter((product) => productArr.includes(product.node.frontmatter.title))
        },
      })
    })

  // Create your paginated pages => Must be added last as this is a page
  paginate({
      createPage, // The Gatsby `createPage` function
      items: videos, // An array of objects
      itemsPerPage: 6, // How many items you want per page
      pathPrefix: '/videos', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve('src/templates/video-page.js'), // Just like `createPage()`
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Make childImageSharpAvailable in a nested field
// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions
//   createResolvers({
//     TeamPage: {
//       image: {
//         type: `File`,
//         resolve(source, args, context, info) {
//           return createRemoteFileNode({
//             url: `http://localhost:8000${source.url}`,   //`${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           })
//         },
//       },
//     },
//   })
// }
