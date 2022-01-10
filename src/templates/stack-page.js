import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import useSiteMetadata from "../components/SiteMetadata";

// eslint-disable-next-line
export const StackPageTemplate = ({
  image,
  title,
  subheading,
  stackList,
  helmet,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      {helmet || ""}
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  stackList: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

const StackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const {
    meta,
    page
   } = useSiteMetadata();

  return (
    <Layout>
      <StackPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.featuredimage}
        stackList={frontmatter.stackList}
        helmet={
          <Helmet titleTemplate={`${page.stack.title} | ${meta.title}`}>
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.description}`}
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subheading
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
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
