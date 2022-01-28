import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeroSection from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const NotePostTemplate = ({
  content,
  contentComponent,
  tags,
  helmet,
  hero,
  stage,
  publish,
  edit
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = getImage(hero.image) || hero.image;

  return (
    <React.Fragment>
      {helmet || ""}
      <HeroSection img={heroImage} title={hero.title} subheading={hero.description} height={hero.size} position={hero.position} />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <small>{stage}</small>
              <br />
              <small>Planted on: {publish}</small>
              <br />
              <small>Tended on: {edit}</small>
              {tags && tags.length ? (
                <div style={{ marginTop: `0rem` }}>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <small>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

NotePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  stage: PropTypes.string,
  publish: PropTypes.string,
  edit: PropTypes.string,
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const NotePost = ({ data }) => {
  const { markdownRemark: post } = data;
  const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <NotePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        hero={post.frontmatter.hero}
        helmet={
          <Helmet titleTemplate={`%s | ${title}`}>
            <title>{`${post.frontmatter.seo.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.seo.description}`}
            />
          </Helmet>
        }
        stage={post.frontmatter.stage}
        publish={post.frontmatter.date}
        edit={post.frontmatter.editDate}
        tags={post.frontmatter.tags}
      />
    </Layout>
  );
};

NotePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default NotePost;

export const pageQuery = graphql`
  query NotePostByID($id: String!) {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        editDate(formatString: "MMMM DD, YYYY")
        stage
        draft
        featuredpost
        tags
        hero {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 88, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          size
          position
        }
        # references
        seo {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 80, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
