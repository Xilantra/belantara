import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../templates/links-page'

const LinksPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <LinksPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        subheading={data.subheading}
        linkList={data.linkList || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

LinksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LinksPagePreview
