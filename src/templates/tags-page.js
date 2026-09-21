import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TagsRoll from "../components/TagsRoll";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const TagsIndexTemplate = ({
  helmet,
  hero,
}) => {
  const heroImage = hero.image || null;

  return (
    <div>
      {helmet || ""}
      <PostHero image={heroImage} title={hero.title} subtitle={hero.description} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TagsRoll />
        </motion.div>
      </section>
    </div>
  );
};

TagsIndexTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const TagsIndex = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const seoTitle = frontmatter.seo?.title || frontmatter.hero?.title || "Tags";
  const seoDesc = frontmatter.seo?.description || frontmatter.hero?.description;
  const seoImage = frontmatter.seo?.image || frontmatter.hero?.image;

  return (
    <Layout>
      <TagsIndexTemplate
        hero={frontmatter.hero}
        helmet={
          <Seo
            title={seoTitle}
            description={seoDesc}
            image={seoImage}
            pathname="/tags/"
          />
        }
      />
    </Layout>
  );
};

TagsIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TagsIndex;

export const pageQuery = graphql`
  query TagsIndexTemplate {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "tags-page" } }) {
      frontmatter {
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
