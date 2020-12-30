import React from 'react'
import PropTypes from 'prop-types'
import { StackPageTemplate } from '../../templates/stack-page'

const StackPagePreview = ({ entry, widgetFor }) => (
  <StackPageTemplate
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
