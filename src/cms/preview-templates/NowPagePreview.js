import React from 'react'
import PropTypes from 'prop-types'
import { NowPageTemplate } from '../../templates/now-page'

const NowPagePreview = ({ entry, widgetFor }) => (
  <NowPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

NowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NowPagePreview
