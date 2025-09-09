import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import WorkRoll from "../components/WorkRoll";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const WorkIndexTemplate = ({
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
          <WorkRoll />
        </motion.div>
      </section>
    </div>
  );
};

WorkIndexTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const WorkIndex = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <WorkIndexTemplate
        hero={frontmatter.hero}
        helmet={
          <Helmet titleTemplate={`%s | ${title}`}>
            <title>{`${frontmatter.seo.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.seo.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

WorkIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default WorkIndex;

export const pageQuery = graphql`
  query WorkIndexTemplate {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "work-page" } }) {
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
