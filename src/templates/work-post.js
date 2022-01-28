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
export const WorkPostTemplate = ({
  content,
  contentComponent,
  // description,
  tags,
  // title,
  helmet,
  hero
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
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
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

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // description: PropTypes.string,
  // title: PropTypes.string,
  helmet: PropTypes.object,
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        // description={post.frontmatter.description}
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
        tags={post.frontmatter.tags}
        // title={post.hero.title}
      />
    </Layout>
  );
};

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkPost;

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
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
        tags
        hero {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          size
          position
        }
        seo {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
