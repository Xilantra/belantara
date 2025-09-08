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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {posts &&
          posts.map(({ node: post }, idx) => (
            <motion.article
              key={post.id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.2) }}
              className="group overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur"
            >
              {post.frontmatter.hero.image && (
                <div className="overflow-hidden">
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
              <div className="p-5 md:p-6">
                <div className="flex items-baseline gap-2 text-slate-500 dark:text-slate-400 text-sm">
                  <span>{post.frontmatter.date}</span>
                  {post.frontmatter.stage && (
                    <span className="uppercase tracking-wide">{post.frontmatter.stage}</span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl md:text-2xl">
                  <Link className="hover:text-primary" to={post.fields.slug}>
                    {post.frontmatter.hero.title}
                  </Link>
                </h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link className="hover:text-primary" to={post.fields.slug}>
                    Keep Reading →
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
