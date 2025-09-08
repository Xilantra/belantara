import * as React from "react";
import { graphql } from 'gatsby'
import Layout from "../../components/Layout";
import CreatePageRoll from "../../components/CreatePageRoll";
import PostHero from "../../components/PostHero";
import { motion } from 'motion/react'

export default class CreateIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PostHero image={{ url: '/img/blog-index.jpg' }} title="Latest Stories" />
        <section className="px-4 sm:px-6 md:px-8 py-gc-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CreatePageRoll />
          </motion.div>
        </section>
      </Layout>
    );
  }
}

// Do some magic here
export const pageQuery = graphql`
  query CreateIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "create-page" } } }
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
            # featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
