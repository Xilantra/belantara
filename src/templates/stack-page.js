import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const StackPageTemplate = ({
  hero,
  stackList,
  helmet,
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
          <Features gridItems={stackList} />
        </motion.div>
      </section>
    </div>
  );
};

StackPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  stackList: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

const StackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <StackPageTemplate
        hero={frontmatter.hero}
        stackList={frontmatter.stackList}
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

StackPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default StackPage;

export const StackPageQuery = graphql`
  query StackPage($id: String!) {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
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
        stackList {
          name
          description
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          
        }

      }
    }
  }
`;
