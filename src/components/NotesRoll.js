import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { motion } from 'motion/react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class NotesRollTemplate extends React.Component {
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
              {post.frontmatter.hero.image && (
                <div className="overflow-hidden border-b border-border/80">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.hero.image,
                        alt: `featured image thumbnail for post ${post.frontmatter.hero.title}`,
                        width:
                          post.frontmatter.hero.image.childImageSharp?.gatsbyImageData.width,
                        height:
                          post.frontmatter.hero.image.childImageSharp?.gatsbyImageData.height,
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-baseline gap-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{post.frontmatter.date}</span>
                  {post.frontmatter.stage && (
                    <span className="text-secondary-foreground">{post.frontmatter.stage}</span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  <Link className="transition-colors hover:text-accent" to={post.fields.slug}>
                    {post.frontmatter.hero.title}
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

NotesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function NotesRoll() {
  return (
    <StaticQuery
      query={graphql`
        query NotesRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "note-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 256)
                id
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  editDate(formatString: "MMMM DD, YYYY")
                  stage
                  draft
                  featuredpost
                  hero {
                    title
                    description
                    image {
                      childImageSharp {
                        gatsbyImageData(width: 120, quality: 80, placeholder: BLURRED, layout: FULL_WIDTH)
                      }
                    }
                    size
                    position
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <NotesRollTemplate data={data} count={count} />}
    />
  );
}
