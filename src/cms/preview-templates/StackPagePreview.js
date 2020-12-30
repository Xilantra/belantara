import React from 'react'
import PropTypes from 'prop-types'
import { StashPageTemplate } from '../../templates/stash-page'

const StackPagePreview = ({ entry, widgetFor }) => (
  <StashPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

StackPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StackPagePreview
