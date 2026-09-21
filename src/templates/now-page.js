import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Content, { HTMLContent } from "../components/Content";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const NowPageTemplate = ({ hero, content, contentComponent, helmet, }) => {
  const PageContent = contentComponent || Content;
  const heroImage = hero.image || null;

  return (
    <React.Fragment>
      {helmet || ""}
      <PostHero image={heroImage} title={hero.title} subtitle={hero.description} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate max-w-none dark:prose-invert"
        >
          <PageContent content={content} />
        </motion.div>
      </section>
    </React.Fragment>
  );
};

NowPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
};

const NowPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const seoTitle = post.frontmatter.seo?.title || post.frontmatter.hero?.title || "Now";
  const seoDesc = post.frontmatter.seo?.description || post.frontmatter.hero?.description;
  const seoImage = post.frontmatter.seo?.image || post.frontmatter.hero?.image;

  return (
    <Layout>
      <NowPageTemplate
        hero={post.frontmatter.hero}
        contentComponent={HTMLContent}
        helmet={
          <Seo
            title={seoTitle}
            description={seoDesc}
            image={seoImage}
            pathname="/now/"
          />
        }
        content={post.html}
      />
    </Layout>
  );
};

NowPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NowPage;

export const nowPageQuery = graphql`
  query NowPage($id: String!) {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        seo {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 88, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
