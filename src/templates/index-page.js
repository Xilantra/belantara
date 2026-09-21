import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NotesRoll from "../components/NotesRoll";
import WorkRoll from "../components/WorkRoll";
import FlashyHero from "../components/FlashyHero";
import { motion } from 'motion/react'
// eslint-disable-next-line
export const IndexPageTemplate = ({ helmet, hero }) => {

  return (
    <div className="min-h-screen">
      {helmet || ''}
      
      {/* 1. Hero Section with Classical Ceiling Fresco, Top Nav, Tech Badges & Avatar */}
      <FlashyHero hero={hero} />

      {/* 2. Work Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <motion.h2
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Work
            </motion.h2>
            <p className="max-w-2xl text-xs md:text-sm leading-relaxed text-muted-foreground">
              Antara hasil karya saya dari 1990 sehingga kini. Pilih beberapa karya anda yang berbaloi dan berkualiti untuk ditunjukkan. Jangan lambakkan semuanya.
            </p>
          </div>
          <WorkRoll />
        </div>
      </section>

      {/* 3. Blog Section */}
      <section className="border-t border-border/60 py-16 md:py-24 bg-muted/20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <motion.h2
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Blog
            </motion.h2>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="h-1.5 w-6 rounded-full bg-accent" />
              <span className="h-1.5 w-2 rounded-full bg-border" />
              <span className="h-1.5 w-2 rounded-full bg-border" />
            </div>
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
          <Seo
            title={frontmatter.seo?.title}
            description={frontmatter.seo?.description}
            image={frontmatter.seo?.image}
            pathname="/"
          />
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
            publicURL
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
            publicURL
            childImageSharp {
              gatsbyImageData(quality: 88, placeholder: BLURRED, layout: FULL_WIDTH)
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
