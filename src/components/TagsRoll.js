import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import { motion } from 'motion/react'

class TagsRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const group = data?.allMarkdownRemark?.group || []

    // Fallback default tags if no tags populated yet
    const displayTags =
      group.length > 0
        ? group.slice(0, 5)
        : [
            { fieldValue: 'UI Design', totalCount: 4 },
            { fieldValue: 'Netlify', totalCount: 6 },
            { fieldValue: 'Gatsby', totalCount: 8 },
            { fieldValue: 'Decap CMS', totalCount: 5 },
            { fieldValue: 'Jamstack', totalCount: 7 },
          ]

    return (
      <div className="w-full">
        {/* Horizontal row of rounded tag cards matching mockup */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {displayTags.map((tag, idx) => (
            <motion.div
              key={tag.fieldValue}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="group flex h-20 items-center justify-center rounded-xl border border-border/90 bg-background/60 p-4 text-center shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-muted/60 hover:shadow-md"
              >
                <span className="font-display text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {tag.fieldValue}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right-aligned action button matching mockup */}
        <div className="mt-6 flex justify-end">
          <Link to="/tags" className="btn-pill">
            Lihat selanjutnya
          </Link>
        </div>
      </div>
    )
  }
}

TagsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }),
}

export default function TagsRoll() {
  return (
    <StaticQuery
      query={graphql`
        query TagsRollQuery {
          allMarkdownRemark(limit: 1000) {
            group(field: { frontmatter: { tags: SELECT } }) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={(data, count) => <TagsRollTemplate data={data} count={count} />}
    />
  )
}

