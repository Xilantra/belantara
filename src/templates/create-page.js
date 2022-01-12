import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import useSiteMetadata from "../components/SiteMetadata";

// eslint-disable-next-line
export const CreatePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  image,
  subheading,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      {helmet || ""}
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CreatePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
};

const CreatePage = ({ data }) => {
  const { markdownRemark: post } = data;

  const {
    meta
   } = useSiteMetadata();
   
  return (
    <Layout>
      <CreatePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.featuredimage}
        subheading={post.frontmatter.subheading}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={`%s | ${meta.title}`}>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CreatePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CreatePage;

export const pageQuery = graphql`
  query CreatePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subheading
        description
        editDate(formatString: "MMMM DD, YYYY")
        # featuredpost
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        # contentType {
        #   type
        #   linkList {
        #       name
        #       description
        #       url
        #     }
        # }
      }
    }
  }
`;
