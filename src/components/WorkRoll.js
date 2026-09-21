import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery, withPrefix } from 'gatsby'
import { motion } from 'motion/react'

const defaultArtworks = [
  {
    id: 'versailles',
    title: 'Lukisan di Istana Versailles',
    year: '2021',
    image: '/img/hero-versailles.jpg',
    slug: '/work/lukisan-di-istana-versailles/',
    featured: true,
  },
  {
    id: 'landscape',
    title: 'Pemandangan Pedesaan di Desa Belanda',
    year: '1645',
    image: '/img/work-landscape.jpg',
    slug: '/work/pemandangan-pedesaan/',
  },
  {
    id: 'knitter',
    title: 'The Little Knitter',
    year: '1882',
    image: '/img/work-knitter.jpg',
    slug: '/work/the-little-knitter/',
  },
  {
    id: 'rembrandt',
    title: 'Potret Orang Tua dengan Beret',
    year: '1645',
    image: '/img/work-rembrandt.jpg',
    slug: '/work/potret-orang-tua/',
  },
  {
    id: 'seascape',
    title: 'Pertempuran Laut Sinop',
    year: '1853',
    image: '/img/work-seascape.jpg',
    slug: '/work/pertempuran-laut-sinop/',
  },
]

class WorkRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const posts = data?.allMarkdownRemark?.edges || []

    // Build curated artwork list using posts if available or default museum collection
    const items = [...defaultArtworks]
    if (posts.length > 0) {
      const p = posts[0].node
      items[0] = {
        ...items[0],
        id: p.id || items[0].id,
        title: p.frontmatter?.hero?.title || items[0].title,
        year: p.frontmatter?.date || items[0].year,
        image: items[0].image, // always points reliably to /img/hero-versailles.jpg
        slug: p.fields?.slug || items[0].slug,
        featured: true,
      }
    }

    const featuredItem = items[0]
    const midTop = items[1]
    const midBottom = items[2]
    const rightTop = items[3]
    const rightBottom = items[4]

    return (
      <div className="w-full">
        {/* Asymmetrical 5-piece Mosaic Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Column 1: Featured 2-row tall card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6"
          >
            <Link
              to={featuredItem.slug}
              className="group relative block h-[360px] md:h-[500px] w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={withPrefix(featuredItem.image)}
                alt={featuredItem.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white drop-shadow">
                  {featuredItem.title}
                </h3>
                <p className="mt-1 text-sm font-light text-white/80">
                  {featuredItem.year}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Column 2: Stacked 2 cards */}
          <div className="flex flex-col gap-4 md:col-span-3 md:gap-5">
            {/* Mid Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="h-[172px] md:h-[240px]"
            >
              <Link
                to={midTop.slug}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={withPrefix(midTop.image)}
                  alt={midTop.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs text-white/90 truncate drop-shadow">{midTop.title}</p>
                </div>
              </Link>
            </motion.div>

            {/* Mid Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="h-[172px] md:h-[240px]"
            >
              <Link
                to={midBottom.slug}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={withPrefix(midBottom.image)}
                  alt={midBottom.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs text-white/90 truncate drop-shadow">{midBottom.title}</p>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Column 3: Stacked 2 cards */}
          <div className="flex flex-col gap-4 md:col-span-3 md:gap-5">
            {/* Right Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="h-[172px] md:h-[240px]"
            >
              <Link
                to={rightTop.slug}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={withPrefix(rightTop.image)}
                  alt={rightTop.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs text-white/90 truncate drop-shadow">{rightTop.title}</p>
                </div>
              </Link>
            </motion.div>

            {/* Right Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[172px] md:h-[240px]"
            >
              <Link
                to={rightBottom.slug}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={withPrefix(rightBottom.image)}
                  alt={rightBottom.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs text-white/90 truncate drop-shadow">{rightBottom.title}</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right-aligned action button matching mockup */}
        <div className="mt-8 flex justify-end">
          <Link to="/work" className="btn-pill">
            Lihat selanjutnya
          </Link>
        </div>
      </div>
    )
  }
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function WorkRoll() {
  return (
    <StaticQuery
      query={graphql`
        query WorkRollQuery {
          allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "work-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  templateKey
                  date(formatString: "YYYY")
                  featuredpost
                  hero {
                    title
                    description
                    image {
                      childImageSharp {
                        gatsbyImageData(
                          quality: 90
                          placeholder: BLURRED
                          layout: FULL_WIDTH
                        )
                      }
                    }
                    size
                    position
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <WorkRollTemplate data={data} count={count} />}
    />
  )
}

