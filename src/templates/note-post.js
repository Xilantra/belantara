import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

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
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-x-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {stage && <span>{stage}</span>}
          {publish && <span>Planted: {publish}</span>}
          {edit && <span>Tended: {edit}</span>}
          </div>
        {tags && tags.length ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-3 mb-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            {tags.map((tag) => (
              <Link key={tag} to={`/tags/${kebabCase(tag)}/`} className="transition-colors hover:text-accent">
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
            className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-medium dark:prose-invert"
          >
            <PostContent content={content} />
          </motion.div>
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
