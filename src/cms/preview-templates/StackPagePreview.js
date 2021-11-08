import React from 'react'
import PropTypes from 'prop-types'
import { StackPageTemplate } from '../../templates/stack-page'

const StackPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <StackPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        stackList={data.stackList || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

StackPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StackPagePreview
