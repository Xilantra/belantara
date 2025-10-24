import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { motion } from 'motion/react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CreatePageRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {posts &&
          posts.map(({ node: post }, idx) => (
            <motion.article
              key={post.id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.2) }}
              className="group flex flex-col border border-border bg-background/90 shadow-sm transition-colors hover:border-accent/80"
            >
              {post.frontmatter.featuredimage && (
                <div className="overflow-hidden border-b border-border/80">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp?.gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp?.gatsbyImageData.height,
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl font-medium text-foreground">
                  <Link className="transition-colors hover:text-accent" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-base leading-relaxed text-secondary-foreground">
                  {post.excerpt}
                </p>
                <div>
                  <Link className="link-fx text-sm font-medium uppercase tracking-[0.2em] text-foreground" to={post.fields.slug}>
                    Keep reading →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
      </div>
    )
  }
}

CreatePageRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function CreatePageRoll() {
  return (
    <StaticQuery
      query={graphql`
        query CreatePageRollQuery {
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
                  editDate(formatString: "MMMM DD, YYYY")
                  # featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        placeholder: BLURRED
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <CreatePageRollTemplate data={data} count={count} />}
    />
  );
}
