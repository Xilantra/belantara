import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import LinkList from "../components/Links";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const LinksPageTemplate = ({
  hero,
  linkList,
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
          <LinkList gridItems={linkList} />
        </motion.div>
      </section>
    </div>
  );
};

LinksPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  linkList: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

const LinksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <LinksPageTemplate
        hero={frontmatter.hero}
        linkList={frontmatter.linkList}
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

LinksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LinksPage;

export const LinksPageQuery = graphql`
  query LinksPage($id: String!) {
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
        linkList {
          name
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 48, quality: 88, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          
        }

      }
    }
  }
`;
