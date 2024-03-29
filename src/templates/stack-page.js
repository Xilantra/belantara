import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import HeroSection from "../components/FullWidthImage";

// eslint-disable-next-line
export const StackPageTemplate = ({
  hero,
  stackList,
  helmet,
}) => {
  const heroImage = getImage(hero.image) || hero.image;

  return (
    <div className="content">
      {helmet || ""}
      <HeroSection img={heroImage} title={hero.title} subheading={hero.description} height={hero.size} position={hero.position} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={stackList} /> 
              </div>
            </div>
          </div>
        </div>
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
