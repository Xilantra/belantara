import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from "lodash";

class TagsRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { group } = data.allMarkdownRemark

    return (
      <ul className="taglist">
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
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
              group(field: frontmatter___tags) {
                  fieldValue
                  totalCount
              }
          }
        }
      `}
      render={(data, count) => <TagsRollTemplate data={data} count={count} />}
    />
  );
}
