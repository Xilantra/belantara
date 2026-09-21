import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
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
        <section className="pt-32 pb-20 px-4 sm:px-6 md:px-8 min-h-[70vh]">
          <div className="mx-auto w-full max-w-4xl">
            <Seo
              title={`Tag: ${tag}`}
              description={`Semua artikel dan nota dengan topik "${tag}".`}
              pathname={`/tags/${tag.toLowerCase()}/`}
            />
            <div className="mb-8 border-b border-border pb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Topik / Tag</span>
              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {tagHeader}
              </h1>
            </div>
            <ul className="divide-y divide-border/60">{postLinks}</ul>
            <div className="mt-12">
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                to="/tags/"
              >
                <span>← Lihat Semua Tag</span>
              </Link>
            </div>
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
      sort: { frontmatter: { date: DESC } }
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
