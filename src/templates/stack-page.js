import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const StackPageTemplate = ({
  image,
  title,
  subheading,
  stackList
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
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

  return (
    <Layout>
      <StackPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        stackList={frontmatter.stackList}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        stackList {
          name
          description
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          
        }

      }
    }
  }
`;
