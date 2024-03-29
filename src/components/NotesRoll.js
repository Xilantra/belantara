import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class NotesRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.hero.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.hero.image,
                          alt: `featured image thumbnail for post ${post.frontmatter.hero.title}`,
                          width:
                            post.frontmatter.hero.image.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.hero.image.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4 is-block"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.hero.title}
                    </Link>
                    <small className="is-block">
                      {post.frontmatter.date}
                    </small>
                    <small>{post.frontmatter.stage}</small>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
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
