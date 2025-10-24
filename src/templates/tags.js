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
        <Link to={post.node.fields.slug} className="block py-3 font-display text-xl font-medium text-foreground transition-colors hover:text-accent">
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
        <section className="bg-muted py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Helmet title={`${tag} | ${title}`} />
            <h3 className="mb-8 font-display text-3xl font-medium text-foreground md:text-4xl">{tagHeader}</h3>
            <ul className="space-y-1">{postLinks}</ul>
            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              <Link className="transition-colors hover:text-accent" to="/tags/">Browse all tags →</Link>
            </p>
          </div>
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
