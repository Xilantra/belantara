import React from 'react'
import PropTypes from 'prop-types'
import { CreatePageTemplate } from '../../templates/create-page'

const CreatePagePreview = ({ entry, widgetFor }) => (
  <CreatePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CreatePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CreatePagePreview
