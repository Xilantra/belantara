import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import NotesRoll from "../components/NotesRoll";
import WorkRoll from "../components/WorkRoll";
import FlashyHero from "../components/FlashyHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const IndexPageTemplate = ({ helmet, hero }) => {

  return (
    <div className="min-h-screen">
      {helmet || ''}
      {/* Full-bleed magazine hero with canon paddings */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20" aria-hidden />
        <FlashyHero title={hero.title} subtitle={hero.description} />
      </div>

      {/* Full-bleed sections with responsive padding */}
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <div className="flex items-end justify-between">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-display text-[6vw] md:text-[3vw]"
          >
            <span className="accent">Work</span>
          </motion.h2>
          <Link className="text-sm md:text-base hover:text-primary" to="/work">Explore →</Link>
        </div>
        <div className="mt-6">
          <WorkRoll />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <div className="flex items-end justify-between">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-[6vw] md:text-[3vw]"
          >
            <span className="accent">Latest stories</span>
          </motion.h2>
          <Link className="text-sm md:text-base hover:text-primary" to="/notes">All notes →</Link>
        </div>
        <div className="mt-6">
          <NotesRoll />
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // seo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        helmet={
          <Helmet titleTemplate={`%s`}>
            <title>{`${frontmatter.seo.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.seo.description}`}
            />
          </Helmet>
        }
        // title={frontmatter.title}
        // image={frontmatter.image}
        // subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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

// mainpitch {
//   title
//   description
//   image {
//     alt
//     image {
//       childImageSharp {
//         gatsbyImageData(quality: 72, layout: FULL_WIDTH)
//       }
//     }
//   }
// }
