import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PostHero from "../components/PostHero";
import { motion } from 'motion/react'

// eslint-disable-next-line
export const AboutPageTemplate = ({ hero, date, content, contentComponent, helmet, }) => {
  const PageContent = contentComponent || Content;
  const heroImage = hero.image || null;

  return (
    <React.Fragment>
      {helmet || ""}
      <PostHero image={heroImage} title={hero.title} subtitle={hero.description} />
      <section className="px-4 sm:px-6 md:px-8 py-gc-5">
        <div className="text-sm text-slate-600 dark:text-slate-300">Last update: {date}</div>
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

AboutPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  date: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.seo.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.seo.description}`}
            />
          </Helmet>
        }
        hero={post.frontmatter.hero}
        date={post.frontmatter.date}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
