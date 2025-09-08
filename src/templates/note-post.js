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
  const heroImage = hero.image || null;

  return (
    <React.Fragment>
      {helmet || ""}
      <PostHero image={heroImage} title={hero.title} subtitle={hero.description} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <div className="text-sm text-slate-600 dark:text-slate-300 space-x-4">
          {stage && <span className="uppercase tracking-wide">{stage}</span>}
          {publish && <span>Planted: {publish}</span>}
          {edit && <span>Tended: {edit}</span>}
        </div>
        {tags && tags.length ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-3 mb-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"
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
