import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, withPrefix } from 'gatsby'
import { motion } from 'motion/react'

const defaultFeaturedPosts = [
  {
    title: 'Cara menukar URL di Netlify',
    tags: ['#netlify', '#domain'],
    image: '/img/blog-forest-trail.jpg',
    slug: '/notes/cara-menukar-url-di-netlify/',
  },
  {
    title: 'Langkah menukar gambar di Netlify CMS',
    tags: ['#NetlifyCMS', '#gambar'],
    image: '/img/blog-redwood-hq.jpg',
    slug: '/notes/langkah-menukar-gambar-di-netlify-cms/',
  },
  {
    title: 'Tips membeli nama domain anda',
    tags: ['#teknologi', '#domainName'],
    image: '/img/blog-forest-sunbeam.jpg',
    slug: '/notes/tips-membeli-nama-domain-anda/',
  },
]

const defaultSecondaryPosts = [
  {
    title: 'Membina Web Pantas dengan Gatsby & Tailwind',
    tags: '#webdev #gatsby #tailwind',
    slug: '/notes/membina-web-pantas-dengan-gatsby-dan-tailwind/',
  },
  {
    title: 'Konsep Digital Gardening & Pengurusan Nota',
    tags: '#workflow #garden #productivity',
    slug: '/notes/digital-gardening-dan-pengurusan-nota/',
  },
  {
    title: 'Panduan Decap CMS untuk Jamstack & Serverless',
    tags: '#cms #jamstack #netlify',
    slug: '/notes/panduan-decap-cms-serverless/',
  },
  {
    title: 'Semua Arkib & Catatan Belantara',
    tags: '#belantara #notes',
    slug: '/notes/',
  },
]

class NotesRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const posts = data?.allMarkdownRemark?.edges || []

    // Map 3 featured visual cards using real dynamic posts with fallbacks
    const featuredPosts = defaultFeaturedPosts.map((def, idx) => {
      if (posts[idx]) {
        const node = posts[idx].node
        const tags = node.frontmatter.tags
          ? node.frontmatter.tags.map((t) => (t.startsWith('#') ? t : `#${t}`))
          : def.tags
        const image =
          node.frontmatter.hero?.image?.publicURL ||
          (typeof node.frontmatter.hero?.image === 'string'
            ? node.frontmatter.hero.image
            : def.image)
        return {
          title: node.frontmatter.hero?.title || node.frontmatter.title || def.title,
          tags,
          image: image || def.image,
          slug: node.fields?.slug || def.slug,
        }
      }
      return def
    })

    // Map 4-column secondary posts using remaining dynamic posts with fallbacks
    const secondaryPosts = defaultSecondaryPosts.map((def, idx) => {
      const postIdx = idx + 3
      if (posts[postIdx]) {
        const node = posts[postIdx].node
        const tags = node.frontmatter.tags
          ? node.frontmatter.tags.map((t) => (t.startsWith('#') ? t : `#${t}`)).join(' ')
          : def.tags
        return {
          title: node.frontmatter.hero?.title || node.frontmatter.title || def.title,
          tags,
          slug: node.fields?.slug || def.slug,
        }
      }
      return def
    })

    return (
      <div className="w-full">
        {/* Tier 1: 3 Featured Visual Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                to={post.slug}
                className="group relative flex h-[380px] md:h-[460px] w-full flex-col justify-end overflow-hidden rounded-xl bg-neutral-900 shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                {/* Background photo */}
                <img
                  src={withPrefix(post.image)}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Card footer content */}
                <div className="relative z-10 flex items-end justify-between p-6">
                  <div className="flex flex-col gap-2 pr-4">
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-snug text-white drop-shadow">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs font-light text-white/75">
                      {post.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Circular action arrow button */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-neutral-950 group-hover:translate-x-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tier 2: 4-Column Secondary Article Row */}
        <div className="mt-8 border-y border-border grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {secondaryPosts.map((post, idx) => (
            <motion.div
              key={`${post.title}-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={post.slug}
                className="group flex flex-col justify-between p-5 md:py-6 transition-colors hover:bg-muted/50 h-full"
              >
                <h4 className="font-display text-base md:text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h4>
                <p className="mt-2 text-xs font-normal text-muted-foreground">
                  {post.tags}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right-aligned action button matching mockup */}
        <div className="mt-6 flex justify-end">
          <Link to="/notes" className="btn-pill">
            Lihat selanjutnya
          </Link>
        </div>
      </div>
    )
  }
}

NotesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function NotesRoll() {
  return (
    <StaticQuery
      query={graphql`
        query NotesRollQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "note-post" } } }
            limit: 8
          ) {
            edges {
              node {
                excerpt(pruneLength: 256)
                id
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  tags
                  hero {
                    title
                    description
                    image {
                      publicURL
                      childImageSharp {
                        gatsbyImageData(quality: 85, placeholder: BLURRED, layout: FULL_WIDTH)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <NotesRollTemplate data={data} count={count} />}
    />
  )
}

