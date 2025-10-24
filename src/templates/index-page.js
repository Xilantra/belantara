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
    <div className="min-h-screen space-y-24">
      {helmet || ''}
      <FlashyHero hero={hero} />

      <section className="bg-muted py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            >
              Recent work
            </motion.h2>
            <Link className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent" to="/work">Explore portfolio →</Link>
          </div>
          <WorkRoll />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            >
              Latest stories
            </motion.h2>
            <Link className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent" to="/notes">Browse all notes →</Link>
          </div>
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
