import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { motion } from 'motion/react'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post, idx) => (
      <motion.li
        key={post.node.fields.slug}
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.2) }}
        className="list-none"
      >
        <Link to={post.node.fields.slug} className="block py-3 hover:text-primary font-display text-xl">
          {post.node.frontmatter.hero.title}
        </Link>
      </motion.li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.meta.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="px-4 sm:px-6 md:px-8 py-gc-5">
          <Helmet title={`${tag} | ${title}`} />
          <h3 className="font-display text-3xl mb-6"><span className="accent">{tagHeader}</span></h3>
          <ul>{postLinks}</ul>
          <p className="mt-8"><Link className="hover:text-primary" to="/tags/">Browse all tags →</Link></p>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            hero {
              title
            }
          }
        }
      }
    }
  }
`;
