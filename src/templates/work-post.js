import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'
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
  const heroImage = hero.image || null;

  return (
    <React.Fragment>
      {helmet || ""}
      <PostHero image={heroImage} title={hero.title} subtitle={hero.description} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        {tags && tags.length ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            {tags.map((tag) => (
              <Link key={tag} to={`/tags/${kebabCase(tag)}/`} className="uppercase tracking-wide hover:text-primary">
                {tag}
              </Link>
            ))}
          </motion.div>
        ) : null}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate max-w-none dark:prose-invert"
        >
          <PostContent content={content} />
        </motion.div>
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
