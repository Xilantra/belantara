import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { getImage } from "gatsby-plugin-image";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/CreatePageContent";
import useSiteMetadata from "../components/SiteMetadata";

// eslint-disable-next-line
export const CreatePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  contentType,
  type,
  image,
  subheading,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = image || null;

  return (
    <div>
      {helmet || ""}
      <PostHero image={heroImage} title={title} subtitle={subheading} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        {description && <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate max-w-none dark:prose-invert"
        >
          <PostContent content={content} />
        </motion.div>
        {contentType && <div className="mt-8"><Features contentType={contentType} /></div>}
      </section>
    </div>
  );
};

CreatePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
  contentType: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

const CreatePage = ({ data }) => {
  const { markdownRemark: post } = data;

  const {
    meta
   } = useSiteMetadata();
   
  return (
    <Layout>
      <CreatePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.featuredimage}
        subheading={post.frontmatter.subheading}
        description={post.frontmatter.description}
        contentType={post.frontmatter.contentType}
        helmet={
          <Helmet titleTemplate={`%s | ${meta.title}`}>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CreatePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CreatePage;

export const pageQuery = graphql`
  query CreatePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subheading
        description
        editDate(formatString: "MMMM DD, YYYY")
        # featuredpost
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        contentType {
          type
          name
          description
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          body
        }
      }
    }
  }
`;
