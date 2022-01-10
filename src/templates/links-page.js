import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import LinkList from "../components/Links";
import FullWidthImage from "../components/FullWidthImage";
import useSiteMetadata from "../components/SiteMetadata";

// eslint-disable-next-line
export const LinksPageTemplate = ({
  image,
  title,
  subheading,
  linkList,
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
                <LinkList gridItems={linkList} /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

LinksPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  linkList: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

const LinksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const {
    meta,
    page
   } = useSiteMetadata();

  return (
    <Layout>
      <LinksPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.featuredimage}
        linkList={frontmatter.linkList}
        helmet={
          <Helmet titleTemplate={`${page.links.title} | ${meta.title}`}>
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
