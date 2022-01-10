import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const NowPageTemplate = ({ title, description, content, contentComponent, helmet, }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {helmet || ""}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  helmet: PropTypes.object,
};

const NowPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NowPageTemplate
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

NowPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NowPage;

export const nowPageQuery = graphql`
  query NowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
